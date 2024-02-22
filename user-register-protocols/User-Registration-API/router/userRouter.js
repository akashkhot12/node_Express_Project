const express = require('express');
const userRouter = express.Router();
const {signIn,signUp} = require('../controller/userController')

userRouter.post('/singin',signIn);

userRouter.post('/singup',signUp)

module.exports = userRouter;