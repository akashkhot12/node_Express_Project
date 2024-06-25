const express = require('express');
const connection = require('../config/database');
const bcrypt = require('bcrypt');


// register new users - signUp
const register = async(req,res)=>{
   const {firstname, lastname, username, password, email, phone} = req.body;
   
   try {
        const hashedPassword = await bcrypt.hash(password,10);
        const result = await connection.query('INSERT INTO Users (firstname, lastname, username, password, email, phone) VALUES (?, ?, ?, ?, ?, ?)', [firstname, lastname, username, hashedPassword, email, phone]);
        if (result) {
            res.status(201).json({message:"User registered successfully."});
            return result;
        }
   } catch (error) {
        res.status(500).json({ error: error.message });
   }
}

const getAllUsers = async(req,res)=>{
    res.send('getAllUsers');
}

module.exports = {register,getAllUsers}