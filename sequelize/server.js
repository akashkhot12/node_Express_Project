const bodyParser = require('body-parser');
const express = require('express');
const User = require('./models/user')
const app = express();

app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.send("hello world")
})

User.sync({force:true});

app.listen(3000,()=>{
    console.log(`App will run on: http://localhost:3000`);
})