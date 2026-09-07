const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const createblog=new Schema(
    {
        title:{
            type:String,
            require:true
        },
        category:{
            type:String,
            require:true
        },
        content:{
            type:String,
            require:true
        },
    }
)

const newblog=mongoose.model("newblog",createblog);
module.exports=newblog;