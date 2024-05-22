const express = require('express');
const dotenv = require('dotenv');
const { chats } = require('./data/data.js');
dotenv.config();

const PORT=process.env.PORT||8000

const app = express();
app.get('/',(req,res)=>{
    res.send('API is running')
});

app.get("/api/chat",(req,res)=>{
    res.send(chats);
})
app.get("/api/chat/:id",(req,res)=>{
    console.log(req.params.id);
    const singleChat=chats.find(c=>c._id===req.params.id);
    res.send(singleChat);
})
app.listen(PORT,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log(`Server started on PORT on {http://localhost:${PORT}}`);
    }
})