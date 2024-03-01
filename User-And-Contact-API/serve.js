const express = require('express');
const app = express();
const mongoose = require('mongoose')



mongoose.connect('mongodb+srv://akashkhot03:Akash3975@cluster0.iygfbux.mongodb.net/')
.then(() => {
    app.listen(5000,()=>{
        console.log("server is started on port number 5000");
    })
}).catch((err) => {
    console.log(err);
});