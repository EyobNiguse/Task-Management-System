const express = require("express");
const app = express();
const mongoose = require("mongoose");
const auth  = require("./routes/Auth");
require("custom-env").env();
const  PORT =  process.env.PORT || 3000;

mongoose.connect(config.get(process.MONGO_URI)).then(()=>{
    console.log("database connected");
}).catch();
//  enabling express json 
app.use(express.json());
app.use("/api/v1/auth",auth);
app.listen(PORT,()=>{
    console.log(`running on port ${PORT}`)
})