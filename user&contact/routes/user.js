const express = require('express');
const router = express.Router();
const { register, getAllUsers } = require('../controller/userController');

router.post('/register', register);
router.get('/', getAllUsers);

module.exports = router;