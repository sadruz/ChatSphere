const asyncHandler = require('express-async-handler');
const User = require("../Models/userModel");
const generateToken=require("../config/generateToken");
const registerUser = asyncHandler(async(req,res)=>{
    const {name,email,password,pic} = req.body
    //since we have taking data from frontend we have to tell our server to accept json_data;
    if(!name || !email || !password){
        res.status(400);
        throw new Error("Please Enter All Valid Fields")
    }
    
    //check if exits user 
    const userExists= await User.findOne({email});    
    if(userExists){
        res.status(400);
        throw new Error("User already Exits");
    }


    const user = await User.create({
        name,
        email,
        password,
        pic
    });

    if(user){
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            password:user.password,
            pic:user.pic,
            token:generateToken(user._id),
        });
    }else{
        res.status(400);
        throw new Error("Failed to create User");
    }
});

const authUser = asyncHandler(async(req,res)=>{
    const {email,password} = req.body

    const user= await User.findOne({email});    
    if(user && (await user.matchPassword(password))){
        res.json({
            _id:user._id,
            name:user.name,
            email:user.email,
            pic:user.pic,
            token:generateToken(user._id),
        });
    }
    else{
        res.status(400);
        throw new Error("Invalid User or Password");
    }

})
module.exports = {registerUser,authUser};