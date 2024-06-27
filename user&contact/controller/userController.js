const express = require("express");
const connection = require("../config/database");
const bcrypt = require("bcrypt");

// register new users - signUp.

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

                    res.status(201).json({ message: 'User registered.' });
                });
        });
    });
};

// get all user details.

const getAllUsers = async (req, res) => {
    connection.query('SELECT * FROM Users', (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.status(200).json(results);
    });
};


// get user data by using id

const getUserById = async (req,res)=>{
    const {id} = req.params;
    connection.query('SELECT * FROM Users WHERE id = ?',[id],(err,result)=>{
        if (err) return res.status(500).json({ error: err });
        res.status(200).json(result);
    })
}



module.exports = { register, getAllUsers,getUserById };
