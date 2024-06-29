const express = require('express');
const { login, changePassword, forgotPassword } = require('../controller/authController');
const router = express.Router();



router.post('/login',login);
router.post('/changePassword',changePassword);
router.post('/forgotPassword',forgotPassword);

module.exports = router;