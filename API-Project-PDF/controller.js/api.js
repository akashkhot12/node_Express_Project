const model = require('../model/model');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const SECRET_KEY = 'APIPROJECTPDF'

const register = async (req, res) => {
    const { firstname, lastname, username, password, email, phone } = req.body;

    try {
        const userExist = await userDetails.find({email:email});
        if(!userExist) {
            const hashedPassword  = await bcrypt.hash(password,10);

            const result = await userDetails.create({
                firstname:firstname,
                lastname:lastname,
                username:username,
                password:hashedPassword,
                email:email,
                phone:phone
            })

            const token = jwt.sign({email:result.email,id:result._id},SECRET_KEY)
            res.status(201).json({message:result,token:token})
        }
        else{
            res.status(401).json({message:"user already exist"})
        }
    } catch (error) {
        res.status(500).json({ message: "somethig went wrong", error })
    }
}

module.exports = {register}