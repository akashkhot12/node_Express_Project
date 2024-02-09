const express = require('express');
 const router = require('express').Router()



router.get('',(req,res)=>{
    const locals = {
        title:"Node JS Blog",
        Description:"Simple Blog Created with Node Js, Express Js, Mongo DB "
    }
res.render('index',{locals})
 })

module.exports  = router;