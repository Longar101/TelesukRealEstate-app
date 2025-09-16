const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

//used promise asyncy await
async function Database() {
   try {
           //used mongoose to connect create dbs connection
           await mongoose.connect(process.env.MONGO);
           console.log("database up and running successfully");
           
   } catch (error) {
         console.log(error);
         
   }
   
}
Database()




//Express server creation  using install express js module 
//we initialise app varible as object
const app = express();
     app.use(express.json());
     app.use(cors);
 app.listen(3000,()=>{
    console.log("server up and running ");
    
 })