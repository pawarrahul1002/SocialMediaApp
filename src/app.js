import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.routes.js";
import {ErrorMiddleware} from "./utils/ApiError.js"

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json()); // To handle JSON data
app.use(express.urlencoded({ extended: true })); // To handle form-data

// app.use((req, res, next) => {
//   console.log("req.body: ", req.body); // This should show parsed data
//   // next();  // Pass to the next route handler

//   console.log("Content-Type: ", req.headers['content-type']);
//   res.status(200).json(req.body);
// });

// app.use(express.json({ limit: "16kb" }));
// app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

app.use(cookieParser());

app.use("/api/v1/users",userRouter);
app.use(ErrorMiddleware);
//
export default app;
