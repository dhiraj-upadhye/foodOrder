import express from "express";
import cors from "cors";
import { router } from "./routes/index.js";
import dotenv from "dotenv";
import UserRouter from "./routes/User.js";
import OrderRouter from "./routes/Order.js";
import mongoose from "mongoose";


dotenv.config({ path: "../.env" });
console.log("fh");

const app = express();

const uri =  "mongodb+srv://dhiraj:dmu2000@food.n16xb.mongodb.net/?retryWrites=true&w=majority&appName=food" || process.env.MONGO_URI

// console.log(process.env.MONGO_URI);

mongoose.connect(uri).then(()=>{
  console.log("mongoDB connected")
}).catch((err)=>{
  console.log("chud gaye guru",err)
})

app.use(cors());
app.use(express.json());

app.get("/ddd", (req, res) => {
  res.json({
    msg: "test",
  });
});

app.use("/api/v1", UserRouter);
app.use("/api/v1/orders", OrderRouter);

console.log("fhrrrrrrrrrrr");
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
