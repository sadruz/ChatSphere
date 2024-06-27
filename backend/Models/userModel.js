const mongoose =require("mongoose");
const bcrypt = require('bcryptjs');
const userModel = mongoose.Schema(
    {
        name:{type:String,trim:true,required:true},
        email:{type:String,trim:true,required:true,unique:true},
        password:{type:String,required:true},
        pic:{type:String,default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"}
    },
    {
        timestamps:true,
    }
);
//
userModel.methods.matchPassword = async function (enterPass){
    return bcrypt.compare(enterPass,this.password);
}
//before save run given function
userModel.pre("save",async function (next){
    if(!this.isModified){
        next();
    }
    //before sending it to database it encript our password
    const salt= await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);
})
const User = mongoose.model("User",userModel);
module.exports=User;