const express = require('express');
const conn = require('../config/database')


const addContact = async(req,res)=>{
    res.send('addContact')
};

const getContactDetails = async(req,res)=>{
    res.send('getContactDetails')
};

const getUserDetailsWithContacts = async(req,res)=>{
    res.send('getUserDetailsWithContacts')
};


module.exports = {addContact,getContactDetails,getUserDetailsWithContacts}