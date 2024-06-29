const express = require('express');
const { login, logout, changePassword } = require('../controller/authController');

const router =  express.Router();


router.post('/login',login);
router.post('/logout',logout);
router.post('/changePass',changePassword);


module.exports = router;