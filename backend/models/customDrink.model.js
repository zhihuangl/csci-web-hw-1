import mongoose from "mongoose";

const CustomOptionsSchema = new mongoose.Schema({
  tea: [String],
  fruit: [String],
  toppings: [String], 
  price: Number
});

const CustomOptions = mongoose.model("CustomOptions", CustomOptionsSchema);

export default CustomOptions;