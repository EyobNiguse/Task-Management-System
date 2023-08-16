require("custom-env").env();
const express =  require("express");
const router  = express.Router();
const {userSchema,validateUser} =  require("../models/User");
const SECRET =  process.env.SECRET || "HAPPYCODINGMAN";
const { sendResponse, loginValidator ,validateID} = require("../helpers/Helper");
const {isLoggedIn} = require("../middlewares/auth");

// get user details given an id
router.get("/:userID",isLoggedIn,async(req,res)=>{
    if(!validateID(req.params.userID)){
        return sendResponse(res,"error",400,message="invalid user ID");
    }   
    let user  =  await userSchema.findOne({_id:req.params.userID});
    if(!user){
        return sendResponse(res,"error",400,message="user can not be found");
    }
    return sendResponse(res,"success",200,user,message="user found");

});

// update user name
router.put("/username",isLoggedIn,async(req,res)=>{
    
    let user  =  await userSchema.findOne({_id:req.user._id}).select("-password");
    if(!user){
        return sendResponse(res,"error",400,[],message="user can not be found");
    }
    user.username = req.body.username;
    await user.save();
    return sendResponse(res,"success",200,user,message="username updated");
});


module.exports = router;