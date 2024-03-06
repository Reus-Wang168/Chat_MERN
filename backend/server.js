import  express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv"
import authRoutes from "./routes/auth.routes.js"
import connectToMongoDB from "./db/connectToMongoDB.js";

import messageRoutes from "./routes/message.routes.js";

import userRoutes from "./routes/user.routes.js"

const app = express();
dotenv.config();
const PORT = process.env.PORT ||5000
// app.get("/",(rsq,res)=>{
//     res.send("hello dfsdf ")
// })
app.use(express.json())
app.use(express.urlencoded({ extended: true })); // 解析 application/x-www-form-urlencoded 格式的请求体

app.use(cookieParser())
app.use("/api/auth",authRoutes)
app.use("/api/messages", messageRoutes);
app.use("api/users",userRoutes);

// app.get("/api/auth/signup",(req,res) =>{
//   console.log("signup route")
// })

// app.get("/api/auth/login",(req,res) =>{
//     console.log("signup route")

// })

// app.get("/api/auth/logout",(req,res) =>{
//     console.log("logout route")

// })



app.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`server on ${PORT}`)})