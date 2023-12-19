var express = require('express');
var router  = express.Router();

const credetials = {
    email:"admin@gmail.com",
    password:"admin@12345"
}

// login user

router.post('/login',(req,res)=>{
if (req.body.email=credetials.email&&req.body.password==credetials.password) {
    req.session.user = req.body.email
    res.end("login successfull")
}
else{
res.end("invalid username")
}
})

module.exports = router;