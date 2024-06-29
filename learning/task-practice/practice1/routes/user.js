const express = require('express');
const { register, getAllUsers, getUsersByID } = require('../controller/userController');
const router = express.Router();


router.post('/register',register);
router.get('/',getAllUsers);
router.get('/:id',getUsersByID)

module.exports = router;