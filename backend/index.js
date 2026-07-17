import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDb from "./config/dbConnect.js";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();
const PORT = process.env.PORT;

import userRouter from "./routes/userRoute.js";
import inquiryRouter from "./routes/inquiryRoute.js"

app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use("/api/user", userRouter);
app.use("/api/inquiry", inquiryRouter);

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
  connectDb();
});
3;
