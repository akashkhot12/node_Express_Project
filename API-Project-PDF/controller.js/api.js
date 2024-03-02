const userDetails = require('../model/model');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const SECRET_KEY = 'APIPROJECTPDF'

const register = async (req, res) => {
    const { email,password } = req.body;
    try{
        const userExist = await userDetails.findOne({email:email});
        if (userExist) {
           return res.status(401).json({message:"user already exist"})
        }

        const hashedPassword = await bcrypt.hash(password,10);

        const result = await userDetails.create({
            email:email,
            password:hashedPassword
        })

    
    } catch (error) {
        res.status(500).json({ message: "somethig went wrong", error })
    }
}

module.exports = { register };


