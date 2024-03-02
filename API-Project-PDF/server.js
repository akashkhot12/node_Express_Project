const express = require('express');
const app = express();
const mongoose = require('mongoose');
const router = require('./router/router');

app.use(express.json());
app.use('/user',router);

mongoose.connect("mongodb+srv://akashkhot03:Akash3975@api.rloabth.mongodb.net/")
.then(()=>{
    app.listen(5500,()=>{
        console.log("app is running on port 5500");
    })
}).catch((error)=>{
    console.log(error);
}) 
