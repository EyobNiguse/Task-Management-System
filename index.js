const express = require("express");
const app = express();
const mongoose = require("mongoose");
const config = require("config");
const auth  = require("./routes/Auth");
const  PORT = 3000;

mongoose.connect("mongodb://127.0.0.1:27017/tasks").then(()=>{
    console.log("database connected");
}).catch();
//  enabling express json 
app.use(express.json());
app.use("/api/v1/auth",auth);
app.listen(PORT,()=>{
    console.log(`running on port ${PORT}`)
})