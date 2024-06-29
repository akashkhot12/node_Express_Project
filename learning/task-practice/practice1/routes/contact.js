const express = require('express');
const { createContact, getContactwithUserDetails, getContactByUserId } = require('../controller/contactController');
const router = express.Router();


router.post('/createContact',createContact);
router.get('/:id',getContactwithUserDetails);
router.get('/usersContacts/:user_id',getContactByUserId);


module.exports = router;