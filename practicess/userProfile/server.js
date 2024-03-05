const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./router/user');
const userProfileRouter = require('./router/userprofile');

const app = express();

app.use(express.json());
app.use('/users',userRouter);
app.use('/users',userProfileRouter);

mongoose.connect("mongodb+srv://akashkhot03:Akash3975@api.rloabth.mongodb.net/")
.then(()=>{
    app.listen(5500,()=>{
        console.log("app is running on port 5500");
    })
}).catch((error)=>{
    console.log(error);
}) 