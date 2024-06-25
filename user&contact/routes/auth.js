const express = require('express');
const { login, logout, forgotPassword, resetPassword, changePassword } = require('../controller/authController');
const router = express.Router();


router.post('/login',login );
router.post('/logout', logout);
router.post('/forgot-password',forgotPassword);
router.post('/reset-password', resetPassword);
router.post('/change-password', changePassword);


module.exports = router;