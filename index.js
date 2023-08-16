const express = require("express");
const app = express();
const mongoose = require("mongoose");
const  PORT = 3000;
const {userSchema} =  require("./models/User");

mongoose.connect("mongodb://127.0.0.1:27017/tasks").then(()=>{
    console.log("database connected");
}).catch();

app.listen(PORT,()=>{
    console.log(`running on port ${PORT}`)
})