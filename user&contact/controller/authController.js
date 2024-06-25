const express = require('express');
const conn = require('../config/database');

const login = async(req,res)=>{
        res.send('login')
};

const logout = async(req,res)=>{
    res.send('logout')
};

const forgotPassword = async(req,res)=>{
    res.send('forgotPassword')
};

const resetPassword = async(req,res)=>{
    res.send('resetPassword')
};

const changePassword = async(req,res)=>{
    res.send('changePassword')
};

module.exports = {login,logout,forgotPassword,resetPassword,changePassword}


