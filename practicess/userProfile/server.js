const express = require('express');
const mongoose = require('mongoose');
const router = require('./router');
const app = express();

app.use(express.json());
app.use('/users',router)

mongoose.connect("mongodb+srv://akashkhot03:Akash3975@api.rloabth.mongodb.net/")
.then(()=>{
    app.listen(5500,()=>{
        console.log("app is running on port 5500");
    })
}).catch((error)=>{
    console.log(error);
}) 