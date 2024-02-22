const express = require('express');
const userRouter = express.Router();
const app = express();

userRouter.post('/singup',(req,res)=>{
    res.send('signup')
});

userRouter.post('/login',(req,res)=>{
    res.send('login')
})

module.exports = userRouter;