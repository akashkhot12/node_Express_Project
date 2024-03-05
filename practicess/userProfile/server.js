const express = require('express');
const mongoose = require('mongoose')
const app = express();

mongoose.connect("mongodb+srv://akashkhot03:Akash3975@api.rloabth.mongodb.net/")
.then(()=>{
    app.listen(5500,()=>{
        console.log("app is running on port 5500");
    })
}).catch((error)=>{
    console.log(error);
}) 