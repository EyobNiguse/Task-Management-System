const express =  require("express");
const router  = express.Router();
const {userSchema,validateUser} =  require("../models/User");

// configutration manager for the app 

const config = require("config");

// password hashing function 

const bcrypt = require("bcrypt");

const { sendResponse, loginValidator } = require("../middlewares/Helper");

// library used to select specific keys from an object with ease
const _ = require("lodash");

// json web token library 
const jwt  =  require("jsonwebtoken");

//  user registers using email password and username 
router.post("/signup",async(req,res)=>{
   //  make sure to validate user input 
    const {values,error} = validateUser(req.body);
    if(error){
    return  sendResponse(res,"error",400,[],message=error.details[0].message);
    }
    // check if user already exists 
    let checkUser   = await userSchema.findOne({email:req.body.email});
    if(checkUser){
      return sendResponse(res,"error",400,[],message="user with this email already exists");
    }

    //  password hashing
    let hashedPassword = await bcrypt.hash(req.body.password,10);
     let user = new userSchema({
        email:req.body.email,
        username:req.body.username,
        password:hashedPassword,
     });
     
     await user.save();
     
     token   = await jwt.sign( _.pick(user,["username","email"]),config.get("SECRET"));
     
     return sendResponse(res, "success",  200, {token:token}, message = 'signup success');
});

// login users in
router.post("/login",async(req,res)=>{
   //  using the helper function validate the input from user
   const {values,error} = loginValidator(req.body);
   if(error){
      return sendResponse("error",400,[],message=error.details[0].message);
   }
   // find the user with email 
   let user  = await userSchema.findOne({email:req.body.email});
   if(!user){
      return sendResponse(res,401,[],message="invalid login attempt");
   }
   // let dbPass =  user.password;
   let checkPass = await bcrypt.compare(req.body.password,user.password)
   if(!checkPass){
      return sendResponse(res,401,[],message="invalid login attempt");
   }
   let token =  await jwt.sign()
});

module.exports = router;