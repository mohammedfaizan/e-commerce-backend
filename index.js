import express, { urlencoded } from "express";
import cors from "cors";
import db from "./utils/db.js";
import router from "./routes/order.routes.js";

const app = express();
const port = process.env.PORT || 6014;

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("backend is running");
});

db();

app.use("/api/v1", router);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
