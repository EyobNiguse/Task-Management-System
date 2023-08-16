const mongoose = require("mongoose");
const task = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    dueDate:{
        type:String,
        require:true
    },
    status:{
        type:String,
        enum:["ToDO","InProgress","Done"]
    }
,
priority:{
    type:String,
    enum:["medium","high","low"]
},
// list of assignees to a task 
assignee:{
    type:[{type:mongoose.Types.ObjectId,ref:"User"}]
},
// creator of a task
owner:{
type:mongoose.Types.ObjectId,
ref:"User"
}
});
module.exports.taskSchema = mongoose.model("Task",task);