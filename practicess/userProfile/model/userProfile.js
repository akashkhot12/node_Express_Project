// models/UserProfile.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userProfileSchema = new Schema({
    user_id: { type: Schema.Types.ObjectId, ref: 'User' },
    full_name: String,
    birthdate: Date,
    bio: String,
    avatar_url: String,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('UserProfile', userProfileSchema);
