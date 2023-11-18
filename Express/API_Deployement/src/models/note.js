const mongoose = require("mongoose");

const noteSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },

    password:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    }
},{timestamps:true});

module.exports = mongoose.model("note",noteSchema);