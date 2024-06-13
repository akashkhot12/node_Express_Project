// routes/authRoutes.js
const express = require('express');
const { signup, login, logout } = require('../controllers/authController');
const protect = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', protect, logout);

const name = "Piyush";
const lname = "thaware";
// new changes
const email="piyush@gmail.com";
const phone = 9876543321;

module.exports = router;
