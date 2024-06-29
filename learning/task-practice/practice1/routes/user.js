const express = require('express');
const { registration, getAllusers, getUsersById } = require('../controller/userController');
const router = express.Router();


router.post('/registration',registration);
router.get('/',getAllusers);
router.get('/:id',getUsersById);


module.exports = router;