import express from "express";
import {
  createOrder,
  getOrders,
  getOrderById,
  updateOrder,
  deleteOrder
} from "../controllers/order.controller.js";

const router = express.Router();

// All routes require login middleware
router.post("/", createOrder);        // create order
router.get("/", getOrders);           // get all orders of user
router.get("/:id", getOrderById);     // get one order
router.put("/:id", updateOrder);      // update order
router.delete("/:id", deleteOrder);   // delete order

export default router;
