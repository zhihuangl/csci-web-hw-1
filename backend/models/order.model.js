import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  username: { type: String, required: true },
  items: [
    {
      type: { type: String, enum: ["classic", "custom"], required: true },
      name: String,                 // name of classic drink
      tea: String,                  // only for custom
      fruit: String,                // only for custom
      topping: String,           // 1 topping chosen
      quantity: { type: Number, default: 1 },
      price: Number                 // price per item
    }
  ],
  total: Number,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Order", OrderSchema);
