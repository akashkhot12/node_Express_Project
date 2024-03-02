const mongoose = require("mongoose");

const userDetails = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true 
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true 
    },
    phone: {
        type: Number,
        required: true,
        unique: true 
    },
    token:{
        type:String,
        default:''
    }
});

module.exports = mongoose.model('API',userDetails)
