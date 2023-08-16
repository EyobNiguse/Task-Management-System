require("custom-env").env();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const auth  = require("./routes/Auth");
const user = require("./routes/User");
const task = require("./routes/Task");
const project = require("./routes/Project");

const  PORT =  process.env.PORT || 5000;
const MONGO_URI =  process.env.MONGO_URI || "mongodb://127.0.0.1:27017/task" ;

mongoose.connect(MONGO_URI).then(()=>{
    console.log("database connected");
}).catch();
//  enabling express json 
app.use(express.json());
app.use("/api/v1/auth",auth);
app.use("/api/v1/user",user);
app.use("/api/v1/task",task);
app.use("/api/v1/project",project);
app.listen(PORT,()=>{
    console.log(`running on port ${PORT}`)
})