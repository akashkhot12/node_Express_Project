const express = require('express');
const app = express();
const router = express.Router();


router.get('/showusers',async(req,res)=>{
    res.send("show data")
})

router.post('/register',async(req,res)=>
{
    res.send("register data")
})

router.post('/login',async(req,res)=>{
    res.send("login data")
})

router.post('/logout',async(req,res)=>{
    res.send("logout data")
})

module.exports  =router;
