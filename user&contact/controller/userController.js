const express = require('express');
const conn = require('../config/database');


const register = async(req,res)=>{
    res.send('register');
}

const getAllUsers = async(req,res)=>{
    res.send('getAllUsers');
}

module.exports = {register,getAllUsers}