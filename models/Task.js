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
}
});
module.exports.taskSchema = mongoose.model("Task",task);