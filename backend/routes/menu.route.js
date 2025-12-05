import express from "express";
import ClassicDrink from "../models/classicDrink.model.js";
import CustomOptions from "../models/customDrink.model.js";

const router = express.Router();

// GET full menu (classic drinks + custom options)
router.get("/", async (req, res) => {
  try {
    const classicDrinks = await ClassicDrink.find();
    const customOptions = await CustomOptions.findOne(); 

    res.json({
      classicDrinks,
      customOptions
    });
  } catch (err) {
    res.status(500).json({ error: "Cannot fetch menu" });
  }
});

export default router;
