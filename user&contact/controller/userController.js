const express = require("express");
const connection = require("../config/database");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "Akash2020";

// register new users - signUp
const register = async (req, res) => {
    const { firstname, lastname, username, password, email, phone } = req.body;
    connection.query('SELECT * FROM Users WHERE email = ?', [email], (err, results) => {
        if (err) return res.status(500).json({ error: err });

        if (results.length > 0) return res.status(400).json({ message: 'Email already exists' });

        bcrypt.hash(password, 10, (err, hash) => {
            if (err) return res.status(500).json({ error: err });

            connection.query('INSERT INTO Users (firstname, lastname, username, password, email, phone) VALUES (?, ?, ?, ?, ?, ?)',
                [firstname, lastname, username, hash, email, phone],
                (err, result) => {
                    if (err) return res.status(500).json({ error: err });

                    res.status(201).json({ message: 'User registered.'});
                });
        });
    });
};


const getAllUsers = async (req, res) => {
    connection.query('SELECT * FROM Users', (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.status(200).json(results);
    });
};

const getUserById = async(req,res)=>{
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

module.exports = { register, getAllUsers,getUserById };
