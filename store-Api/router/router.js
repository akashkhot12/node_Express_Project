const express = require('express');
const { showDetails } = require('../controller/api');
const router = express.Router();


router.get('/storeDetails',showDetails);

router.post('/storingData',);

router.put('/editStoreDetails',);

router.delete('/destroyStoreData',)

module.exports = router;