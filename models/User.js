const mongoose = require("mongoose");
const user = new mongoose.Schema({
username:{
    type:String,
    require:true
},
email:{
type:String,
require:true

},
password:{
    type:String,
    require:true
}
});
module.exports.userSchema =  mongoose.model("User",user);