// registration 
// getbyall user 

const express = require('express');
const connection = require('../model/database');
const bcrypt =require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const register = async(req,res)=>{
    const {firstname,lastname,username,password,email,phone} = req.body;

    await connection.query('SELECT * FROM users where email = ?',[email],(err,results)=>{
        if(err) return res.status(500).json({message:err})
        if(results.length > 0 ) return res.status(400).json({message:"this email already exist."})
        
            bcrypt.hash(password,10,(err,hash)=>{
                connection.query('INSERT INTO users (firstname,lastname,username,password,email,phone) values(?,?,?,?,?,?)',[firstname,lastname,username,hash,email,phone],(err,result)=>{
                    if(err) res.status(500).json({message:err});

                   
                    return res.status(201).json({message:"data inserted successfully."})

                    
                })
            })  
    })
} 

const getAllUsers = async(req,res)=>{
    await connection.query('SELECT * FROM users',(err,results)=>{
        if(err) return res.status(500).json({message:err});
         return res.status(500).json({message:results})
    })
}

const getUsersByID = async(req,res)=>{
    const {id} = req.params
    await connection.query('SELECT * FROM users WHERE id =?',[id],(err,result)=>{
        if(err) return res.status(500).json({message:err});
         return res.status(500).json({message:result})
    })
}






module.exports = {register,getAllUsers,getUsersByID};