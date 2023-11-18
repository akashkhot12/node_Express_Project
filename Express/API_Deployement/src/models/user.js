const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },

    description:{
        type:String,
        required:true
    },

    userID:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    }
},{timestamps:true});

module.exports = mongoose.model("user",userSchema);