import { Router } from "express";
import {
  deleteOrder,
  getOrders,
  newOrder,
  updateOrder,
} from "../controllers/order.controller.js";

const router = Router();

router.post("/order", newOrder);
router.get("/orders", getOrders);
router.put("/order/:id", updateOrder);
router.delete("/order/:id", deleteOrder);

export default router;
