const express = require('express');
const app = express();
const mongoose = require('mongoose')
const router = require('./router/router')

app.use(express.json());

app.use('/store',router)


app.get('/',(req,res)=>{
    res.send("hello aakash")
})


mongoose.connect("mongodb+srv://akashkhot03:Akash3975@store.6aecyqd.mongodb.net/")
.then(() => {
    app.listen(5000,()=>{
        console.log("server is up");
    })
}).catch((err) => {
    console.log(err);
});

