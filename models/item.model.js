import mongoose from "mongoose";
import { Schema } from "mongoose";

const ItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  quantity: { type: Number, required: true },
});

const Item = mongoose.model("Item", ItemSchema);

export default Item;
