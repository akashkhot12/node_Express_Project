const express = require('express');
const userRouter = require('./routes/userRoutes');
const app = express();

app.use('/usersusers',userRouter);

app.get('/',(req,res)=>{
    res.send("open server")
})

app.listen(5000,()=>{
    console.log("server is start");
})