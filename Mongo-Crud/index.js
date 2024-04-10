const express = require('express');
const app = express();
const mongodb = require('./config');
const router = express.Router();


app.get('/' , async(req , res)=>{
    const result  = await mongodb();
    const data = await result.find().toArray();
    res.status(200).json({message:data})
})

app.use('/',(req,res)=>{
    res.send("hello user ")
})

app.listen(3000,()=>{
    console.log("port is running on 3000");
})