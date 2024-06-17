const bodyParser = require('body-parser');
const express = require('express');
require('./models/index')
const app = express();

app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.send("hello world")
})

app.listen(3000,()=>{
    console.log(`App will run on: http://localhost:3000`);
})