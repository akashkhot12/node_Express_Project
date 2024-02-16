const express = require('express');
const connect = require('./connections')
const app = express();
const mongodb = require('mongodb')
const mongoose = require('./mongoose')
app.use(express.json());


app.post('/signup',async(req,res)=>{
    let data = await connect();
    let addData = await data.insertOne(req.body);
    res.send(addData);
})

app.get('/registers',async(req,res)=>{
    let db = await connect();
    let showDeatails = await db.findOne();
    res.send(showDeatails);
})

app.listen(5000,()=>{
    console.log("server is up on 5000 port ");
})