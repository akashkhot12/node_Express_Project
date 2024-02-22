const express = require(express);
const mongoose = rrequire('mongoose');
const userSchema = require('../model/userModel')
const app = express();

const signUp = async(req,res)=>{
res.send("hello this is akash")
}

const signIp = async(req,res)=>{
    res.send("hello this is khot")
}

module.exports = {signIp,signUp};