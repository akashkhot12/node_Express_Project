const express = require('express');
const app =express();
const bodyParser = require('body-parser');
require('./models/index');

app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.send("hello world");
})


app.listen(3000,()=>{
    console.log("server is up.");
})