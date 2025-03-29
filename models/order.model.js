import { Schema } from "mongoose";
import mongoose from "mongoose";
// import Item from "./item.model.js";

const OrderSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  items: [{ name: String, price: Number, quantity: Number }],
  totalPrice: { type: Number, required: true },
});

const Order = mongoose.model("Order", OrderSchema);

export default Order;
