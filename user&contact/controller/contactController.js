const express = require('express');
const connection = require('../config/database');


const addContact = async(req,res)=>{
    const { fullname, address, contactno, zip, email, created_by } = req.body;
    // console.log(req.body);
    connection.query('INSERT INTO Contacts (fullname, address, contactno, zip, email, created_by) VALUES (?, ?, ?, ?, ?, ?)', 
    [fullname, address, contactno, zip, email, created_by], 
    (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.status(201).json({ message: 'Contact added' });
    });
};

const getContactDetails = async(req,res)=>{
    res.send('getContactDetails')
};

const getUserDetailsWithContacts = async(req,res)=>{
    res.send('getUserDetailsWithContacts')
};


module.exports = {addContact,getContactDetails,getUserDetailsWithContacts}