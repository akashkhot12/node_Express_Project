const express = require('express');
const { register, login, getAllUsers, getByID, forgotPassword, resetPassword } = require('../controller.js/api');
 const router = express.Router()


router.post('/register',register);
router.post('/login',login);
router.get('/getUsers',getAllUsers);
router.get('/users/:id', getByID);
router.post('/reset', resetPassword);
router.post('/forgot', forgotPassword);


module.exports  = router;