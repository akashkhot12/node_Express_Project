const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const secreteKey = 'secreteKey'

app.get('/',(req,res)=>{
    res.json({
        message:"a simple api"
    })
})

app.post('/login',(req,res)=>{
    const user={
        id:1,
        username:"anil",
        email:"anil@gmail.com"
    }
    jwt.sign({user},secreteKey,{expiresIn:'300s'},(err,token)=>{
       res.json({
        token
       })
    })
})

app.post('/profile',verifyingToken,(res,res)=>{
    
})


function verifyingToken(req,res,next){

}

app.listen(8000,()=>{
    console.log("sserver is start");
})