const express = require('express');
const bodyParser = require('body-parser');
require('./models/index')
const app = express();

app.use(bodyParser.json());


app.get('/',(req,res)=>{
    res.send('hello world')
})


app.listen(3000,()=>{
    console.log("server is started on port 3000");
})
