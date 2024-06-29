const express = require('express');
const connections = require('../model/database');
const bcrypt = require('bcrypt');


const registration = async (req, res) => {
    const { firstname, lastname, username, password, email, phone } = req.body;

    await connections.query('SELECT * FROM users where email = ?', [email], (err, result) => {
        if (err) return res.status(500).json({ message: err });
        if (result.length > 0) return res.status(400).json({ message: "this email alredy exist" });

        bcrypt.hash(password, 10, async (err, hash) => {
            if (err) return res.status(500).json({ message: err });

            console.log(hash);
            await connections.query('INSERT INTO users(firstname,lastname,username,password,email,phone) values(?,?,?,?,?,?)', [firstname, lastname, username, hash, email, phone], (err, results) => {
                if (err) return res.status(500).json({ message: err });
                return res.status(201).json({ message: "data successfully inserted." })
            })

        })
    })
}

const getAllusers = async(req,res)=>{
    await connections.query('SELECT *FROM users',(err,result)=>{
        if (err) return res.status(500).json({ message: err });
        return res.status(200).json({ message: result });
    })
}

module.exports = { registration,getAllusers }