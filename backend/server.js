const express = require('express');
const dotenv = require('dotenv');
const { chats } = require('./data/data');
const connectDB = require('./config/db');
const colors = require('colors');
const userRoute = require('./Router/userRoutes');
const {notfound,errHandler} = require('./Middleware/errorMidleware');
dotenv.config();

const PORT=process.env.PORT||8000

const app = express();
connectDB();

app.use(express.json());//this accept JSONdata from frontend;

app.get('/',(req,res)=>{
    res.send('API is running')
});
app.use('/api/user',userRoute);

app.use(notfound);
app.use(errHandler);
app.listen(PORT,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log(`Server started on PORT on {http://localhost:${PORT}}`.yellow.bold);
    }
})