const express = require('express');
const app = express();


const server = (req,res)=>{
    let path = req.url;
    if (path==="/" || path.toLocaleLowerCase()==='/home') {
        res.send("your are in home page")
    }
}

app.listen(5000,()=>{
    console.log("server is up");
})