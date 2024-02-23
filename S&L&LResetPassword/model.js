const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

const userModel = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        require:true
    }
},{timestamps:true});

module.exports = mongoose.model("User",userModel);