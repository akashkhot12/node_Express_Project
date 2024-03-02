const express = require('express');
const { register } = require('../controller.js/api');
 const router = express.Router()


router.post('/register',register)


router.get('/another-route' , (req , res)=>{
   
})

module.exports  = router;