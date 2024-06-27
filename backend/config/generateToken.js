const jwt = require('jsonwebtoken');
//jwt authorize its a valid user;
const generateToken = (id)=>{
    //parameter jwt.sign(unique_id,secret,time_this_token_expire)
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:"30d"
    });
};

module.exports = generateToken;