const express = require('express');
const mongoose = require('mongoose');
const app = express();
const router = require('./router')


app.use(express.json());
app.use('/user',router);

app.get('/',(req,res)=>{
    res.status('hello')
})

mongoose.connect('mongodb+srv://akashkhot03:Akash3975@loginlogoutsignupreset.wpzvqpc.mongodb.net/')
.then(()=>{
    app.listen(5000,()=>{
        console.log("your server is up on 5000 port ");
    })
}).catch((error)=>{
    console.log(error);
})  