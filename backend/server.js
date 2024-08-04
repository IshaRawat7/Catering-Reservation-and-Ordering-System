import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectToMongoDb from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import adminRouter from "./routes/adminRoute.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000; //running port

app.get("/", (req, res) => {
  res.send("Hello World, it's cold today!");
});

app.use(express.json());
app.use(cors());

connectToMongoDb();

app.use("/api/food", foodRouter);
app.use("api/admin", adminRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order",orderRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
