import mongoose from "mongoose";

const userModel = mongoose.Schema(
    {
        name:{type:String,trim:true,required:true},
        email:{type:String,trim:true,required:true},
        password:{type:String,required:true,},
        pic:{type:String,required:true,default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",}
    },
    {
        timestamps:true,
    }
);

const User = mongoose.model("User",userModel);
export default User;