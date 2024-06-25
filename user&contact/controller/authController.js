const express = require('express');
const connection = require('../config/database');
const bcrypt = require("bcrypt");

const login = async (req, res) => {
    const { email, password } = req.body;
    connection.query('SELECT * FROM Users WHERE username = ?', [email], (err, results) => {
        if (err) return res.status(500).json({ error: err });
        
        if (results.length === 0) return res.status(401).json({ message: 'Authentication failed' });
        
        bcrypt.compare(password, results[0].password, (err, result) => {
            if (err) return res.status(500).json({ error: err });
            if (!result) return res.status(401).json({ message: 'Authentication failed' });
            
            const token = jwt.sign({ userId: results[0].Id }, 'your_jwt_secret', { expiresIn: '1h' });
            res.status(200).json({ token });
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


