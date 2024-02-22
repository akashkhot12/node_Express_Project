const userModel = require('../model/userModel')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const SECRET_KEY = 'UserApi'

const signUp = async(req,res)=>{
// existing user check 
// Hashed password
// user creations
// token generate


    const {userName,email,password}= req.body;
    try {
        const existingUser =await userModel.findOne({email:email})
        if (!existingUser) {
            return res.status(400).json({message:"user already exists"});
        }


        const hashedPassword = await bcrypt.hash(password,10);

        const createUser = userModel.create({
            email:email,
            password:hashedPassword,
            userName:userName
        });

        const token = jwt.sign({email:createUser.email,id:createUser.id},SECRET_KEY)
        res.status(201).json({user:createUser,token:token})



    } catch (error) {
        console.log(error);
        res.status(500).json({message:"something went wrong"})
    }


}

const signIn = async(req,res)=>{
    res.send("hello this is khot")
}

module.exports = {signIn,signUp};