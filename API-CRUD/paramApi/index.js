const connect = require("../connections");
const express = require("express");
const app = express();
const mongodb = require("mongodb")

app.use(express.json());

app.get('/getdata',async(req,res)=>{
    let data = await connect();
    let allData = await data.find().toArray();
    res.send(allData);
})

app.post('/addData',async(req,res)=>{
    let data = await connect();
    let addData = await data.insertOne(req.body);
    res.send(addData);
})

app.put('/:name',async(req,res)=>{
    let data = await  connect();
    let editData = await data.updateOne({name:req.params.body},{$set:req.body});
    res.send(editData);
})
app.delete('/:id',async(req,res)=>{
    let data= await connect();
    let deleteData = await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)});
    res.send(deleteData)
})

app.listen(9000,()=>{
    console.log("server is up on 9000");
})