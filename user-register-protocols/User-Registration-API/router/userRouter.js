const express = require('express');
const router = express.Router();

router.post('/signUp',(req,res)=>{
    res.send("signUp")
})
router.post('/signIn',(req,res)=>{
    res.send("signIn")
})

module.exports = router