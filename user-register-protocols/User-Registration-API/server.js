const express = require('express');
const userRouter = require('./router/userRouter');
const app = express();
const mongose = require('mongoose');

app.use(express.json());


app.use('/user',userRouter);

app.get('/',(req,res)=>{
    res.send("open server")
})


mongose.connect("mongodb+srv://akashkhot03:Akash3975@cluster0.89dnsic.mongodb.net/")
.then(()=>{
    app.listen(5000,()=>{
        console.log("server is start");
    })
})
.catch((error)=>{
console.log(error);
})

