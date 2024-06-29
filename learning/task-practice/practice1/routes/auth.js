const express = require('express');
const { login, logout, changePassword, forgotPassword, resetPassword } = require('../controller/authController');

const router =  express.Router();


router.post('/login',login);
router.post('/logout',logout);
router.post('/changePass',changePassword);
router.post('/forgotPass',forgotPassword);
router.post('/resetPass/:token',resetPassword);


module.exports = router;