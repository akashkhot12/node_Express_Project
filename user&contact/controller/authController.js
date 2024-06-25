const express = require('express');
const connection = require('../config/database');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const JWT_SECRET = 'Akash2020'

// login api
const login = async (req, res) => {
    const { email, password } = req.body;
    connection.query('SELECT * FROM Users WHERE email = ?', [email], (err, results) => {
        if (err) return res.status(500).json({ error: err });

        if (results.length === 0) return res.status(401).json({ message: 'Authentication failed' });
        
        bcrypt.compare(password, results[0].password, (err, result) => {
            console.log(results[0].password);
            if (err) return res.status(500).json({ error: err });
            if (!result) return res.status(401).json({ message: 'Authentication failed' });
            
            const token = jwt.sign({ userId: results[0].Id }, JWT_SECRET, { expiresIn: '1h' });
            res.status(200).json({message:"login successfull.", token });
        });
    });
};

const logout = async (req, res) => {
    res.send('logout')
};

const forgotPassword = async (req, res) => {
    res.send('forgotPassword')
};

const resetPassword = async (req, res) => {
    res.send('resetPassword')
};

const changePassword = async (req, res) => {
    res.send('changePassword')
};

module.exports = { login, logout, forgotPassword, resetPassword, changePassword }


