const express = require("express");
const app = express();
const mongodb = require('../connections/conn');

let connect = async(req,res,next)=>{
   try {
    let connections = await mongodb();
    console.log("database is connected successfully !");
    next();
   } catch (error) {
    console.log(error);
   }
}

app.use(connect);



app.listen(5000,()=>{
    console.log("server is up on");
})