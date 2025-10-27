import { useState, useEffect } from "react";
import Cart from "./Cart";

const Order = () => {
  const [tea, setTea] = useState("");
  const [topping, setTopping] = useState("");
  const [fruit, setFruit] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState([]);
  const premade_drink_cost = 5;
  const custom_drink_cost = 6;

  const premadeDrinks = [
    "Classic Milk Tea",
    "Thai Milk Tea",
    "Matcha Latte",
    "Matcha Green Tea",
  ];

  const options = {
    tea: ["Jasmine Green Tea", "Black Tea", "Thai Tea", "Jasmine", "Oolong", "Chai"],
    fruit: [
      "Strawberry",
      "Lemon",
      "Wintermelon",
      "Peach",
      "Lychee",
      "Passionfruit",
      "Mango",
      "Coconut",
      "Watermelon",
    ],
    topping: [
      "Mango Pudding",
      "Coconut Jelly",
      "Tapioca Pearl",
      "Herbal Jelly",
      "Lychee Jelly",
      "Mango Jelly",
      "Matcha Jelly",
      "Milk Foam",
      "Red Bean",
    ],
  };

  useEffect(() => {
    const savedCart = localStorage.getItem("bobaCart");
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  useEffect(() => {
    localStorage.setItem("bobaCart", JSON.stringify(cart));
  }, [cart]);

  const addCustomDrink = () => {
    if (!tea || !topping || !fruit) {
      alert("Please select tea, topping, and fruit!");
      return;
    }

    const name = `${fruit} ${tea} with ${topping}`;
    const existingIndex = cart.findIndex(item => item.name === name && item.type === "Custom");

    if (existingIndex !== -1) {
      // Update quantity and price if exists
      const updatedCart = [...cart];
      updatedCart[existingIndex].quantity += quantity;
      updatedCart[existingIndex].price = custom_drink_cost * updatedCart[existingIndex].quantity;
      setCart(updatedCart);
    } else {
      setCart([
        ...cart,
        { id: Date.now(), name, unitPrice: custom_drink_cost, totalPrice: custom_drink_cost * quantity, quantity, type: "Custom" }
      ]);
    }

    setTea("");
    setTopping("");
    setFruit("");
    setQuantity(1);
  };

  const addPremadeDrink = (drink) => {
    const existingIndex = cart.findIndex(item => item.name === drink && item.type === "Pre-made");

    if (existingIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingIndex].quantity += quantity;
      updatedCart[existingIndex].totalPrice = premade_drink_cost * updatedCart[existingIndex].quantity;
      setCart(updatedCart);
    } else {
      setCart([
        ...cart,
        { id: Date.now(), name: drink, unitPrice: premade_drink_cost, totalPrice: premade_drink_cost * quantity, quantity, type: "Pre-made" }
      ]);
    }

    setQuantity(1);
  };

  return (
    <div id="order-page">
      <div id="order">
        <h2>🧋 Order Your Boba Drink</h2>

        <div id="custom-drink">
          <h3>Build Your Own ($6 each)</h3>
          <div className="custom-option">
            <label>Fruit:</label>
            <select value={fruit} onChange={(e) => setFruit(e.target.value)}>
              <option value="">Select</option>
              {options.fruit.map(f => <option key={f} value={f}>{f}</option>)}
            </select>
          </div>

          <div className="custom-option">
            <label>Tea Base:</label>
            <select value={tea} onChange={(e) => setTea(e.target.value)}>
              <option value="">Select</option>
              {options.tea.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>

          <div className="custom-option">
            <label>Topping:</label>
            <select value={topping} onChange={(e) => setTopping(e.target.value)}>
              <option value="">Select</option>
              {options.topping.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>

          <div className="custom-option">
            <label>Quantity:</label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
          </div>

          <button className='add-custom-button' onClick={addCustomDrink}>+ Add Custom Drink</button>
        </div>

        <div id="premade">
          <h3>Pre-Made Drinks ($5 each)</h3>
          {premadeDrinks.map(drink => (
            <div className="premade-option" key={drink}>
              {drink}
              <button className="add-premade" onClick={() => addPremadeDrink(drink)}>+ Add</button>
            </div>
          ))}

        </div>
      </div>

      <Cart cart={cart} setCart={setCart} />
    </div>
  );
};

export default Order;
