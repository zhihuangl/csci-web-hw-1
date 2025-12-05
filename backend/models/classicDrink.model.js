import mongoose from "mongoose";

const ClassicDrinkSchema = new mongoose.Schema({
  name: String,
  price: Number,
});

const ClassicDrink = mongoose.model("ClassicDrink", ClassicDrinkSchema);

export default ClassicDrink;