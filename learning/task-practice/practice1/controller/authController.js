const express = require('express');
const connections = require('../model/database')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const JWT_SECRET = process.env.SECRETE_KEY;


const login = async (req, res) => {
    const { email, password } = req.body;

    await connections.query('SELECT * FROM users WHERE email=?', [email], (err, results) => {
        if (err) return res.status(500).json({ message: err });
        if (results.length === 0) return res.status(400).json({ message: "This user not exist." });

        bcrypt.compare(password, results[0].password, (err, result) => {
            if (err) return res.status(500).json({ message: err });

            if (!result) return res.status(500).json({ message: "creadentials not match." });

            const token = jwt.sign({ user: results[0].Id }, JWT_SECRET, { expiresIn: '1h' });

            return res.status(200).json({ message: "login successfull", token });
        })
    })
}

const changePassword = async (req, res) => {
    const { token, newPassword } = req.body;

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) return res.status(500).json({ message: "authentication failed." })

        const hashedPassword = bcrypt.hashSync(newPassword, 10);
        const query = 'UPDATE users SET password = ? WHERE id = ?';

        connections.query(query, [hashedPassword, decoded.id], (err, result) => {
            if (err) return res.status(500).json({ message: "There was a problem updating the password." })

            return res.status(200).send('Password changed successfully.');
        })
    })
};

const forgotPassword = async (req, res) => {
    const { email } = req.body;

    connections.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
        if (err) return res.status(500).json({ message: err });
        if (results.length === 0) return res.status(404).json({ message: " user not found." });

        const user = results[0];


        const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: 3600 });

        return res.status(500).json({ auth: true, token, message: "use this token to reset password." });
    })
}


module.exports = { login, changePassword, forgotPassword }




