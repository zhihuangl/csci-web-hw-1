const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";

async function fetchMenu() {
  try {
    const res = await fetch(`${backendUrl}/api/menu`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Error fetching menu:", err);
  }
}

async function sendOrder(order) {
  try {
    const res = await fetch(`${backendUrl}/api/orders`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(order),
    });
    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error("Error sending order:", err);
  }
}



export { fetchMenu, sendOrder };