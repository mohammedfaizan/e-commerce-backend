import mongoose from "mongoose";
import "dotenv/config";

const db = () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(console.log("mongodb connected"))
    .catch((err) => {
      console.log("error connecting to mongoDB", err);
    });
};

export default db;
