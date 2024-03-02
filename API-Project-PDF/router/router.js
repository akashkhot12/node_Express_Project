const express = require('express');
 const router = express.Router()


router.get('/hello' , (req , res)=>{
    // router code here
    res.send("hello akash ")
})


router.get('/another-route' , (req , res)=>{
   
})

module.exports  = router