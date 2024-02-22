const express = require("express");
const app = express();
const mongodb = require('../connections/conn');

app.use(mongodb);
app.listen(5000,()=>{
    console.log("server is up on");
})