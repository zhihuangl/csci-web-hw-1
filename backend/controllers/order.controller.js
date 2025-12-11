import Order from "../models/order.model.js";

// Create a new order
export const createOrder = async (req, res) => {
  try {
    const order = new Order({
      username: req.body.username,   // FIXED
      items: req.body.items,
      total: req.body.total
    });

    await order.save();
    res.json(order);

  } catch (err) {
    res.status(500).json({ error: "Cannot create order", details: err.message });
  }
};

// Get all orders for logged-in user
export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find(); // FIXED
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: "Cannot fetch orders" });
  }
};

// Get one order
export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findOne({
      _id: req.params.id,
      username: req.user.username
    });

    if (!order) return res.status(404).json({ error: "Order not found" });
    res.json(order);

  } catch (err) {
    res.status(500).json({ error: "Cannot fetch order" });
  }
};

// Update order
export const updateOrder = async (req, res) => {
  try {
    const updated = await Order.findOneAndUpdate(
      { _id: req.params.id, username: req.user.username },
      req.body,
      { new: true }
    );

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: "Cannot update order" });
  }
};

// Delete order
export const deleteOrder = async (req, res) => {
  try {
    await Order.findOneAndDelete({
      _id: req.params.id,
      username: req.user.username
    });

    res.json({ message: "Order deleted" });
  } catch (err) {
    res.status(500).json({ error: "Cannot delete order" });
  }
};
