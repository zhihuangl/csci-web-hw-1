import mongoose from "mongoose";
import dotenv from "dotenv";
import ClassicDrink from "../models/classicDrink.model.js";
import CustomOptions from "../models/customDrink.model.js";

dotenv.config();

const options = {
  tea: ["Jasmine Green Tea", "Black Tea", "Thai Tea", "Jasmine", "Oolong", "Chai"],
  fruit: ["Strawberry","Lemon","Wintermelon","Peach","Lychee","Passionfruit","Mango","Coconut","Watermelon"],
  toppings: ["Mango Pudding","Coconut Jelly","Tapioca Pearl","Herbal Jelly","Lychee Jelly","Mango Jelly","Matcha Jelly","Milk Foam","Red Bean"],
  classics: ["Classic Milk Tea","Thai Milk Tea","Matcha Latte","Matcha Green Tea"]
};

mongoose.connect(process.env.DATABASE_URL).then(async () => {
  await ClassicDrink.deleteMany();
  await CustomOptions.deleteMany();

  // Insert classic drinks
  await ClassicDrink.insertMany(
    options.classics.map(name => ({
      name,
      price: 5.50,
    }))
  );

  // Insert custom drink options
  await CustomOptions.create({
    tea: options.tea,
    fruit: options.fruit,
    toppings: options.toppings,
    price: 6.00
  });

  console.log("Menu seeded.");
  process.exit();
});
