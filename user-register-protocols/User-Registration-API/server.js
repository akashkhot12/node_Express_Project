const express = require('express');
const userRouter = require('./router/userRouter');
const app = express();

app.use('/user',userRouter);

app.get('/',(req,res)=>{
    res.send("open server")
})

app.listen(5000,()=>{
    console.log("server is start");
})