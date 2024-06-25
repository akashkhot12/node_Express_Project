const express = require('express');
const { getDataAll } = require('./controller');
const router = express.Router();

router.get('/getAllData',getDataAll)

module.exports = router;