const mongodb = require('./connections');
const express = require('express');
const app = express();

app.use(express.json())

app.get('/',async(req,res)=>{
    let data = await mongodb();
    let readData = await data.find().toArray();
    console.log(readData);
    res.send(readData);
})

app.post('/add',async(req,res)=>{
    let data = await mongodb();
    let addData = await data.insertOne({
        name:"akash",
        age:32,
    gender:"male"  
  })
  if (addData.acknowledged) {
    res.send("data isernt succefully")
  }
  else{
    res.statusCode(404)
  }
})

app.listen(5500,()=>{
    console.log("server is running");
})