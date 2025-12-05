import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  username: { type: String, required: true },
  items: [
    {
      type: { type: String, enum: ["classic", "custom"], required: true },
      name: String,                 // name of classic drink or custom drink
      tea: String,                  // only for custom
      fruit: String,                // only for custom
      toppings: [String],           // any toppings chosen
      quantity: { type: Number, default: 1 },
      price: Number                 // price per item
    }
  ],
  total: Number,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Order", OrderSchema);
