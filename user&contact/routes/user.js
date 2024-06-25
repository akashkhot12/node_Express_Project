const express = require('express');
const router = express.Router();
const { register, getAllUsers, getUserById } = require('../controller/userController');

router.post('/register', register);
router.get('/', getAllUsers);
router.get('/:id', getUserById);

module.exports = router;