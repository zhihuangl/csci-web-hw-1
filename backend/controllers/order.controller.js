import Order from "../models/order.model.js";

// Create a new order
export const createOrder = async (req, res) => {
  try {
    const order = new Order({
      userId: req.user.id,
      items: req.body.items,
      total: req.body.total
    });
    await order.save();
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: "Cannot create order", details: err.message });
  }
};

// Get all orders of logged-in user
export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user.id });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: "Cannot fetch orders" });
  }
};

// Get one order by ID
export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ error: "Order not found" });
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: "Cannot fetch order" });
  }
};

// Update an order by ID
export const updateOrder = async (req, res) => {
  try {
    const updated = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: "Cannot update order" });
  }
};

// Delete an order by ID
export const deleteOrder = async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.json({ message: "Order deleted" });
  } catch (err) {
    res.status(500).json({ error: "Cannot delete order" });
  }
};
