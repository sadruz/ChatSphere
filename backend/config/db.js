// import mongoose
const mongoose = require('mongoose');

// function to connect to database
const connectDB = async()=>{
    try{
        const con = await mongoose.connect(process.env.MONGO_URI);

        console.log(`MongoDb connected: ${con.connection.host}`.cyan.underline.bold);
    }
    catch ( error){
        console.log(`Error: ${error.message}`.red.bold);
        process.exit();
    }
}

module.exports=connectDB;