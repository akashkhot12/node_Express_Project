const express = require('express');
const { registration, getAllusers } = require('../controller/userController');
const router = express.Router();


router.post('/registration',registration);
router.get('/',getAllusers);


module.exports = router;