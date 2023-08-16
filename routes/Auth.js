const express =  require("express");
const router  = express.Router();
const {userSchema} =  require("../models/User");
const bcrypt = require("bcrypt");
const { sendResponse } = require("../middlewares/Helper");

// library used to select itemms from an object with ease
const _ = require("lodash");
const jwt  =  require("jsonwebtoken");

//  user registers using email password and username 
router.post("/signup",async(req,res)=>{
    //  password hashing
    let hashedPassword = await bcrypt.hash(req.body.password,10);
     let user = new userSchema({
        email:req.body.email,
        username:req.body.username,
        password:hashedPassword,
     });
     await user.save();
     token   = await jwt.sign( _.pick(user,["username","email"]),"weaktestSecret");
     sendResponse(res, "success",  200, {token:token}, message = 'signup success');
});


module.exports = router;