const express = require("express");
const router = express.Router();
const data = require("./data.json");

router.get('/getdata',async(req,res)=>{
    res.send(data)
})

module.exports = router