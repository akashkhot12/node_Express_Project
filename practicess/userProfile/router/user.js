// routes/userProfile.js
const express = require('express');
const router = express.Router();
const User = require('../model/user');

// Create a new user profile
router.post('/user-insert', async (req, res) => {
    try {
        const user = new User({
            username: req.body.full_name,
            email: req.body.birthdate,
            password_hash: req.body.bio
        });

        const savedProfile = await user.save();
        res.json(savedProfile);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
