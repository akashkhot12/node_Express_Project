const express = require('express');
const connection = require('../config/database');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const nodemailer = require('nodemailer');
const JWT_SECRET = 'Akash2020'


// middleware 
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        username: 'khotakash10@gmail.com',
        password: 'Akash3975'
    }
});

// login api

const login = async (req, res) => {
    const { email, password } = req.body;
     connection.query('SELECT * FROM Users WHERE email = ?', [email], (err, results) => {
        console.log(results);
        if (err) return res.status(500).json({ error: err });

        if (results.length === 0) return res.status(401).json({ message: 'Authentication failed' });
        
        bcrypt.compare(password, results[0].password, (err, result) => {
            // console.log(results[0].password);
            if (err) return res.status(500).json({ error: err });
            if (!result) return res.status(401).json({ message: 'Authentication failed' });
            
            const token = jwt.sign({ userId: results[0].Id }, JWT_SECRET, { expiresIn: '1h' });
            res.status(200).json({message:"login successfull.", token });
        });
    });
};

// logout api 

const logout = async (req, res) => {
    res.status(200).send({ auth: false, token: null });
};



const forgotPassword = async (req, res) => {
    const { email } = req.body;
    const query = 'SELECT * FROM users WHERE email = ?';
    connection.query(query, [email], (err, results) => {
        if (err) return res.status(500).send('Error on the server.');
        if (results.length === 0) return res.status(404).send('No user found.');

        const user = results[0];
        const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: 3600 }); // expires in 1 hour
        res.status(200).send({ auth: true, token: token, message: 'Use this token to reset your password' });
    });
};


// reset password api. 

const resetPassword = async (req, res) => {
    const { token } = req.params;
    const { newPassword } = req.body;

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(400).send('Invalid or expired token');
        }

        const hashedPassword = bcrypt.hashSync(newPassword, 10);
        connection.query('UPDATE users SET password = ? WHERE id = ?', [hashedPassword, decoded.id], (err, results) => {
            if (err) throw err;
            res.status(200).send('Password reset successful.');
        });
    });
};

// changed password api .
const changePassword = async (req, res) => {
    const { token, newPassword } = req.body;

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) return res.status(500).send('Failed to authenticate token.');

        const hashedPassword = bcrypt.hashSync(newPassword, 10);
        const query = 'UPDATE users SET password = ? WHERE id = ?';
        connection.query(query, [hashedPassword, decoded.id], (err, result) => {
            if (err) return res.status(500).send('There was a problem updating the password.');
            res.status(200).send('Password changed successfully.');
        });
    });
};

module.exports = { login, logout, forgotPassword, resetPassword, changePassword }


