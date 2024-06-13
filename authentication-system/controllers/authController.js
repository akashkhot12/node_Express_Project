// controllers/authController.js
const User = require('../models/user');
const generateToken = require('../utils/jwt');

exports.signup = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = await User.create({ username, email, password });
    res.status(201).json({ 
      _id: user._id, 
      username: user.username, 
      email: user.email, 
      token: generateToken(user._id) 
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
      res.json({ 
        _id: user._id, 
        username: user.username, 
        email: user.email, 
        token: generateToken(user._id) 
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.logout = (req, res) => {
  res.json({ message: 'Logout successful' });
};
