const express = require('express');
const { addContact, getContactDetails, getUserDetailsWithContacts } = require('../controller/contactController');
const router = express.Router();



router.post('/add', addContact);
router.get('/:id', getContactDetails);
router.get('/user/:userId', getUserDetailsWithContacts);

module.exports = router;