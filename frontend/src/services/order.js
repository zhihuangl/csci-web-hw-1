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



export { fetchMenu };