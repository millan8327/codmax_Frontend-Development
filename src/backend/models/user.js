const mongoose=require("mongoose");
const Schema = mongoose.Schema;
const userschema=new Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
});

const User=mongoose.model("User",userschema);
module.exports=User;