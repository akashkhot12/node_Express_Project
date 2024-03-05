const mongoose = require('mongoose');



const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password_hash: String,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
})
module.exports = mongoose.model('User', userSchema);