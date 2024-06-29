const express = require('express');
const connections = require('../model/database')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const JWT_SECRET = process.env.SECRETE_KEY;


const login = async(req,res)=>{
    const {email,password} = req.body;

    await connections.query('SELECT * FROM users WHERE email=?',[email],(err,results)=>{
        if(err) return res.status(500).json({message:err});
        if(results.length === 0) return res.status(400).json({message:"This user not exist."});

        bcrypt.compare(password,results[0].password,(err,result)=>{
            if(err) return res.status(500).json({message:err});
            
            if(!result) return res.status(500).json({message:"creadentials not match."});
            
            const token = jwt.sign({user : results[0].Id},JWT_SECRET,{expiresIn:'1h'});

            return res.status(200).json({message:"login successfull",token});
        })
    })
}


module.exports = {login}




