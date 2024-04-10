const express = require('express');
const app = express();
const mongodb = require('./config');
const router = express.Router();


app.get('/' , async(req , res)=>{
    const result  = await mongodb();
    const data = await result.find().toArray();
    res.status(200).json({message:data})
    console.log(data);
})

app.post('/' , async(req , res)=>{
    const result = await mongodb();
    const addData = await result.insertOne({
        firstName:"joy",
        LastName:"das"
    })
    console.log(addData.acknowledged);
    res.status(201).json({message:addData.acknowledged})

})

app.use('/',(req,res)=>{
    res.send("hello user ")
})

app.listen(3000,()=>{
    console.log("port is running on 3000");
})