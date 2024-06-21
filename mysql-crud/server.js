const express  = require('express');
const app = express();
const port  = 8000;

// middleware


// routes
app.get('/test',(req,res)=>{
    res.send("hello")
})

// listen
app.listen(port,()=>{
    console.log("server is started.");
})