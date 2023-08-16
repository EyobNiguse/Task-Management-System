const mongoose = require("mongoose");
const project = new mongoose.Schema({
name:{
    type:String,
    require:true,
    unique:true
},
description:{
    type:String,
    require:true,
},
owner:{
    type:mongoose.Types.ObjectId,
    ref:"User"
},
// tasks with in the project
tasks:{
    type:[{type:mongoose.Types.ObjectId, ref:"Task"}]
},
// memmbers of a project 
members:{
    type:[{type:mongoose.Types.ObjectId,ref:"User"}]
}
});
module.exports.projectSchema = mongoose.model("Project",project); 