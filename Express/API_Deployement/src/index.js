const express = require("express");
const app = express();
const quotes = require('./quotes.json');
const userRouter = require("./Routes/userROutes");

app.use("/users",userRouter);


app.get('/',(req,res)=>{
    res.send("hello");
})

app.get('/quotes',(req,res)=>{
    res.status(200).json(quotes)
})

app.get('/random',(req,res)=>{
    let index = Math.floor(Math.random ()* quotes.length);
    let quote = quotes[index]
    res.status(200).json(quote)
})

app.listen(5000,()=>{
    console.log("server is started");
})