const express = require('express');
const singUp = require('./controller');
const router = express.Router();


router.post('/signUp',singUp);
router.post('/signIn',signIn);

module.exports = router