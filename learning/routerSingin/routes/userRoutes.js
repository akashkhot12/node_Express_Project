const express = require('express');
const userRouter = express.Router();
const app = express();

userRouter.get('/singup',(req,res)=>{
    res.send('signup')
});

userRouter.get('/login',(req,res)=>{
    res.send('login')
})

module.exports = userRouter;