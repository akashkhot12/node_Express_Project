// routes/userProfile.js
const express = require('express');
const router = express.Router();
const UserProfile = require('../model/user');

// Create a new user profile
router.post('/', async (req, res) => {
    try {
        const userProfile = new UserProfile({
            user_id: req.body.user_id,
            full_name: req.body.full_name,
            birthdate: req.body.birthdate,
            bio: req.body.bio,
            avatar_url: req.body.avatar_url
        });

        const savedProfile = await userProfile.save();
        res.json(savedProfile);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
