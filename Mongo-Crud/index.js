const express = require('express');
const app = express();

app.use('/',(req,res)=>{
    res.send("hello user ")
})

app.listen(3000,()=>{
    console.log("port is running on 3000");
})