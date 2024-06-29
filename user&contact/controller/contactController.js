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


// get contact details with user data.
const getContactDetails = async (req, res) => {
    const { id } = req.params;
    await connection.query('SELECT * FROM Contacts WHERE Id = ?', [id], (err, contactResults) => {
        if (err) return res.status(500).json({ error: err });

        if (contactResults[0].length === 0) return res.status(404).json({ message: 'Contact not found' });

        connection.query('SELECT * FROM Users WHERE Id = ?', [contactResults[0].created_by], (err, userResults) => {
            if (err) return res.status(500).json({ error: err });
            res.status(200).json({ contact: contactResults[0], result: userResults[0] });
        });
    });
};



// pending
const getUserDetailsWithContacts = async (req, res) => {
    const { id } = req.params;
    await connection.query('SELECT * FROM contacts where created_by = ? ',[id],(err,userResults)=>{
        const user = userResults[0];
        
        if (err) return res.status(500).json({ error: err });
         return res.status(200).json({message:user.id,user});
    })
}


module.exports = { addContact, getContactDetails, getUserDetailsWithContacts }