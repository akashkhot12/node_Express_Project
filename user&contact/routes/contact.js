const express = require('express');
const router = express.router();



router.post('/add', contactController.addContact);
router.get('/:id', contactController.getContactDetails);
router.get('/user/:userId', contactController.getUserDetailsWithContacts);

module.exports = router;