const userDetails = require('../model/model');
const config = require('../config/config')
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const SECRET_KEY = 'APIPROJECTPDF';
const nodemailer = require('nodemailer');
const randomstring = require('randomstring');
const crypto = require('crypto');



// registrations of user
const register = async (req, res) => {
    const { firstname, lastname, username, password, email, phone } = req.body;
    try {
        const userExist = await userDetails.findOne({ email: email });
        if (userExist) {
            return res.status(401).json({ message: "user already exist" })
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const result = await userDetails.create({
            firstname: firstname,
            lastname: lastname,
            username: username,
            password: hashedPassword,
            email: email,
            phone: phone
        })
        const token = jwt.sign({ email: result.username, id: result._id }, SECRET_KEY)
        return res.status(201).json({ message: result, token: token })


    } catch (error) {
        res.status(404).json({ message: "somethig went wrong", error })
    }
}


// login the User 

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const validUser = await userDetails.findOne({ email: email });
        if (!validUser) {
            return res.status(401).json({ message: "User not valid" })
        }

        const matchPassword = await bcrypt.compare(password, validUser.password);

        if (!matchPassword) {
            return res.status(401).json({ message: "Invalide Credentials" })
        }

        const token = jwt.sign({ email: validUser.email, id: validUser._id }, SECRET_KEY);
        return res.status(201).json({ message: "login successfully", token: token })

    } catch (error) {
        res.status(404).json({ message: "somethig went wrong", error })
    }
}


// get all user details 

const getAllUsers = async (req, res) => {
    let getDetails = await userDetails.find();
    if (!getDetails) {
        return res.status(401).json({ message: "something went wrong" })
    }
    return res.status(201).json({ message: getDetails })
}


// get by id for particular users

const getByID = async (req, res) => {

    let getUserByID = await userDetails.findById(req.params.id);
    if (!getUserByID) {
        return res.status(401).json({ message: "something went wrong" })
    }
    return res.status(201).json({ message: getUserByID })
}

const forgotPassword = async(req,res)=>{
    try {
        const { email } = req.body;
        const user = await userDetails.findOne({ email });
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }

         // Generate reset token
        const token = crypto.randomBytes(20).toString('hex');
        user.resetPasswordToken = token;
        user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
        await user.save();

        // Send reset password email
        const transporter = nodemailer.createTransport({
        service: 'Gmail',
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
          user: 'ekvidhkridasanghatanabhandara@gmail.com',
          pass: 'Akash3975',
        },
      });

      const mailOptions = {
        to: 'akashkhot03@gmail.com',
        from: 'ekvidhkridasanghatanabhandara',
        subject: 'Reset your password',
        text: `You are receiving this email because you (or someone else) have requested the reset of the password for your account.\n\n
          Please click on the following link, or paste this into your browser to complete the process:\n\n
          http://${req.headers.host}/reset-password/${token}\n\n
          If you did not request this, please ignore this email and your password will remain unchanged.\n`,
      };

      transporter.sendMail(mailOptions, (err) => {
        if (err) {
          console.error('Error sending email:', err);
          return res.status(500).json({ message: 'Failed to send reset email' });
        }
        res.json({ message: 'Reset email sent' });
      });
    } catch (err) {
        console.error('Forgot password error:', err);
        res.status(500).json({ message: 'Server error' });
      }
}


const resetPassword = async(req,res)=>{
    try {
        const { token } = req.params;
        const { password } = req.body;
    
        const user = await userDetails.findOne({
          resetPasswordToken: token,
          resetPasswordExpires: { $gt: Date.now() },
        });
    
        if (!user) {
          return res.status(400).json({ message: 'Invalid or expired token' });
        }
    
        // Hash and update password
        const hashedPassword = await bcrypt.hash(password, 10);
        user.password = hashedPassword;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;
        await user.save();
    
        res.json({ message: 'Password reset successfully' });
      } catch (err) {
        console.error('Reset password error:', err);
        res.status(500).json({ message: 'Server error' });
      }
}








module.exports = { register, login, getAllUsers, getByID, forgotPassword, resetPassword };


