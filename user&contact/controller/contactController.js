const express = require('express');
const connection = require('../config/database');

// Add Contact

const addContact = async (req, res) => {
    const { fullname, address, contactno, zip, email, created_by } = req.body;
    // console.log(req.body);
    connection.query('INSERT INTO Contacts (fullname, address, contactno, zip, email, created_by) VALUES (?, ?, ?, ?, ?, ?)',
        [fullname, address, contactno, zip, email, created_by],
        (err, result) => {
            if (err) return res.status(500).json({ error: err });
            res.status(201).json({ message: 'Contact added' });
        });
};


// pending
const getContactDetails = async (req, res) => {
    const { contactId } = req.params;
    connection.query('SELECT * FROM Contacts WHERE Id = ?', [contactId], (err, contactResults) => {
        if (err) return res.status(500).json({ error: err });

        if (contactResults.length === 0) return res.status(404).json({ message: 'Contact not found' });

        connection.query('SELECT * FROM Users WHERE Id = ?', [contactResults[0].created_by], (err, userResults) => {
            if (err) return res.status(500).json({ error: err });
            res.status(200).json({ contact: contactResults[0], user: userResults[0] });
        });
    });
};


// pending
const getUserDetailsWithContacts = async (req, res) => {
    const { userId } = req.params;
    connection.query('SELECT * FROM Users WHERE Id = ?', [userId], (err, userResults) => {
        if (err) return res.status(500).json({ error: err });
        if (userResults.length === 0) return res.status(404).json({ message: 'User not found' });

        connection.query('SELECT * FROM Contacts WHERE created_by = ?', [userId], (err, contactResults) => {
            if (err) return res.status(500).json({ error: err });
            res.status(200).json({ user: userResults[0], contacts: contactResults });
        });
    });
}


module.exports = { addContact, getContactDetails, getUserDetailsWithContacts }