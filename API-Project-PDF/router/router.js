const express = require('express');
const { register, login, getAllUsers, getByID } = require('../controller.js/api');
 const router = express.Router()


router.post('/register',register);
router.post('/login',login);
router.get('/getUsers',getAllUsers);
router.get('/users/:id', getByID);


module.exports  = router;