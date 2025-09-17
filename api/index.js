import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
//import routes for endpoints
import userRouter from"./Routes/user.Route.js"
import authRouter from "./Routes/auth.route.js";

dotenv.config({ quiet: true });

//used promise asyncy await
//"mongodb://localhost:27017/database"
async function Database() {
   try {
           
           await mongoose.connect(process.env.MONGO)
           console.log("database up and running successfully");
           
   } catch (error) {
         console.log(error);
         
   }
   
}
Database()






//Express server creation  using install express js module 
//we initialise app varible as object
const app = express();
app.use(express.json())

 


 //app.get("/test",(req,res)=>{
  //  res.send("welcome home")
 //})
//user router to get user information
// user the router
app.use("/api/user",userRouter);
app.use("/api/auth",authRouter);




 app.listen(3000,()=>{
    console.log("server up and running on port :3000 ");
    
 })
 