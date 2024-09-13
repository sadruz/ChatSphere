const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoute = require('./Router/userRoutes');
const chatRoutes = require('./Router/chatRoutes');
const messageRoutes = require('./Router/messageRoutes');
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
app.use('/api/chat',chatRoutes);
app.use('api/message',messageRoutes);

app.use(notfound);
app.use(errHandler);
app.listen(PORT,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log(`Server started on PORT on {http://localhost:${PORT}}`.yellow.bold);
    }
})