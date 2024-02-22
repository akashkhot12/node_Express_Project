const express = require('express');
const app = express();
const router = require('./router/userRouter')

app.use('user',)

app.get('/',(req,res)=>{
    res.send("hello")
})

app.listen(5000,()=>{
    console.log("server is up");
})