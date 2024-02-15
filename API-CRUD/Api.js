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
    res.send("data insert succefully").status(201);
  }
  else{
    res.statusCode(404)
  }
})

app.put('/edit',async(req,res)=>{
    let data = await mongodb();
    let editData = await data.updateOne({name:"akash"},{$set:{name
    :"chetna"}});
    res.send(editData).status(301)
})

app.delete('/delete',async(req,res)=>{
    let data = await mongodb();
    let deleteData = await data.deleteOne({name:"chetna"})
    res.send(deleteData.acknowledged).status(201)
})

app.listen(5500,()=>{
    console.log("server is running");
})