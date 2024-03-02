const userDetails = require('../model/model');
const config = require('../config/config')
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const SECRET_KEY = 'APIPROJECTPDF';
const nodemailer = require('nodemailer');
const randomstring = require('randomstring');



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



// forgot and reset password 

const forgotPassword = async (req, res) => {
    try {
        // get user based on posted Email.

        const email = req.body.email;
        const user = await userDetails.findOne({ email: email });

        if (user) {
            const randomString = randomstring.generate()
            const data = await userDetails.updateOne({ email: email }, { $set: { token: randomString } });
            res.status(201).json({ message: "please cheack your inbox and reset your pas." })

            // generate A random token .
    

            // send the token back to the user email.
        } else {
            res.status(404).json({ message: "this email does not exist." })
        }
    } catch (error) {
        res.status(404).json({ message: "somethig went wrong", error })
    }

}

const resetPassword = async (req, res, next) => {

}




module.exports = { register, login, getAllUsers, getByID, forgotPassword, resetPassword };


