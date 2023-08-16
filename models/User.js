const mongoose = require("mongoose");
const JOI = require("joi");
const user = new mongoose.Schema({
username:{
    type:String,
    require:true
},
email:{
type:String,
require:true,
unique:true

},
password:{
    type:String,
    require:true
}
});
function validateUser(input){
const user =  JOI.object().keys({
    username:JOI.string().min(4).max(25).required(),
    email:JOI.string().email().required(),
    password:JOI.string().min(8).max(10).required()
});
return user.validate(input);
}
userSchema  = mongoose.model("User",user);
module.exports = {userSchema , validateUser}  
