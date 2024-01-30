const express = require("express");

const app = express();

const port = process.env.PORT || 5000


app.get("/",(req,res)=>{
    res.send("hello, i am live");
})

const start = async()=>{
    try {
       app.listen(port,()=>{
        console.log("connected succesfully");
       }) 
    } catch (error) {
        console.log(error)
    }
}
start();