import { Schema } from "mongoose";
import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  items: [{ name: String, price: Number, quantity: Number }],
  totalPrice: { type: Number, required: true },
  status: {
    type: String,
    enum: ["pending", "shipped", "delivered"],
    default: "pending",
  },
});

const Order = mongoose.model("Order", OrderSchema);

export default Order;
