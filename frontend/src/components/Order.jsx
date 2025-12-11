import { useEffect, useState } from "react";
import { fetchMenu, sendOrder } from "../services/order.js";
import { loadUser } from "../services/user.js";

export default function OrderPage() {
  const [menu, setMenu] = useState(null);
  const [user, setUser] = useState(null);

  const [type, setType] = useState("classic");
  const [classicName, setClassicName] = useState("");
  const [tea, setTea] = useState("");
  const [fruit, setFruit] = useState("");
  const [topping, setTopping] = useState("");
  const [quantity, setQuantity] = useState(1);

  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    async function load() {
      const data = await fetchMenu();
      setMenu(data);
    }
    load();

    async function fetchUser() {
      setUser(await loadUser());
    }
    fetchUser();
  }, []);

  const addItem = () => {
    if (type === "classic" && !classicName)
      return alert("Choose a classic drink.");

    if (type === "custom" && !tea)
      return alert("Choose a tea base.");

    const newItem =
      type === "classic"
        ? {
          type: "classic",
          name: classicName,
          quantity,
          price: 5.5,
        }
        : {
          type: "custom",
          tea,
          fruit,
          topping,
          name: `${tea} + ${fruit}${topping ? " + " + topping : ""}`,
          quantity,
          price: 6,
        };

    // ------------------------------
    // ⭐ DUPLICATE CHECK
    // ------------------------------

    setOrderItems((prev) => {
      const existingIndex = prev.findIndex((item) => {
        if (item.type !== newItem.type) return false;

        if (newItem.type === "classic") {
          return item.name === newItem.name;
        }

        // custom drink duplicate
        return (
          item.tea === newItem.tea &&
          item.fruit === newItem.fruit &&
          item.topping === newItem.topping
        );
      });

      // If duplicate → update quantity
      if (existingIndex !== -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += newItem.quantity;
        return updated;
      }

      // Otherwise → add new entry
      return [...prev, newItem];
    });

    // Reset form
    setClassicName("");
    setTea("");
    setFruit("");
    setTopping("");
    setQuantity(1);
  };

  const removeItem = (i) => {
    const copy = [...orderItems];
    copy.splice(i, 1);
    setOrderItems(copy);
  };

  const total = orderItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleSubmit = async () => {
    if (!user) return alert("Not logged in.");
    if (orderItems.length === 0) return alert("Order is empty.");

    const order = {
      username: user.username,
      items: orderItems,
      total,
    };

    await sendOrder(order);
    alert("Order placed!");

    setOrderItems([]);
  };

  if (!menu) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h1>Order</h1>

      <h2>Add Item</h2>

{/* Drink Type */}
<div className="form-row">
  <label>Type:</label>
  <select value={type} onChange={(e) => setType(e.target.value)}>
    <option value="classic">Classic Drink</option>
    <option value="custom">Custom Drink</option>
  </select>
</div>

{/* Classic Drink */}
{type === "classic" && (
  <div className="form-row">
    <label>Drink:</label>
    <select
      value={classicName}
      onChange={(e) => setClassicName(e.target.value)}
    >
      <option value="">Select...</option>
      {menu.classicDrinks.map((d, i) => (
        <option key={i} value={d.name}>
          {d.name}
        </option>
      ))}
    </select>
  </div>
)}

{/* Custom Drink */}
{type === "custom" && (
  <div className="form-row">
    <label>Tea:</label>
    <select value={tea} onChange={(e) => setTea(e.target.value)}>
      <option value="">Select...</option>
      {menu.customOptions.tea.map((t, i) => (
        <option key={i} value={t}>
          {t}
        </option>
      ))}
    </select>

    <label>Fruit:</label>
    <select value={fruit} onChange={(e) => setFruit(e.target.value)}>
      <option value="">Select...</option>
      {menu.customOptions.fruit.map((f, i) => (
        <option key={i} value={f}>
          {f}
        </option>
      ))}
    </select>

    <label>Topping:</label>
    <select value={topping} onChange={(e) => setTopping(e.target.value)}>
      <option value="">Select...</option>
      {menu.customOptions.toppings.map((t, i) => (
        <option key={i} value={t}>
          {t}
        </option>
      ))}
    </select>
  </div>
)}

{/* Quantity */}
<div className="form-row">
  <label>Quantity:</label>
  <input
    type="number"
    min="1"
    value={quantity}
    onChange={(e) => setQuantity(Number(e.target.value))}
  />
</div>

<button className="add-item-btn" onClick={addItem}>
  Add Item
</button>

<hr className="order-divider" />


      <h2>Order Items</h2>
      {orderItems.length === 0 && <p>No items yet.</p>}

      {orderItems.map((item, i) => (
        <div
          key={i}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <p>
            <strong>{item.name}</strong>
          </p>

          {item.type === "custom" && (
            <p>
              {item.tea} | {item.fruit} | {item.topping || "No topping"}
            </p>
          )}

          {/* Quantity Controls */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <button
              onClick={() => {
                setOrderItems((prev) => {
                  const updated = [...prev];
                  updated[i].quantity -= 1;

                  // If quantity hits 0 → remove item
                  if (updated[i].quantity <= 0) {
                    updated.splice(i, 1);
                  }

                  return updated;
                });
              }}
            >
              -
            </button>

            <p style={{ margin: "0 10px" }}>Qty: {item.quantity}</p>

            <button
              onClick={() => {
                setOrderItems((prev) => {
                  const updated = [...prev];
                  updated[i].quantity += 1;
                  return updated;
                });
              }}
            >
              +
            </button>
          </div>

          <p>${(item.price * item.quantity).toFixed(2)}</p>

          <button onClick={() => removeItem(i)}>Remove</button>
        </div>
      ))}


      {orderItems.length > 0 && (
        <>
          <h2>Total: ${total.toFixed(2)}</h2>
          <button
            onClick={handleSubmit}
            style={{
              padding: "10px",
              marginTop: "15px",
              background: "black",
              color: "white",
            }}
          >
            Submit Order
          </button>
        </>
      )}
    </div>
  );
}
