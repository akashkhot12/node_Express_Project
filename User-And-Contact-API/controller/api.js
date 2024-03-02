const model = require('../model/schema')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET_KEY = "contactApi1212"

const register = async(req,res)=>{
    const{firstName,lastName,userName,password,email,phone} = req.body;
    try {
        const existUser = await userData.findOne({email:email});
        if (existUser) {
            res.status(401).json({message:"user Already exists "});
        }
        const hashedPassword = await bcrypt.hash(password,10);

        const registrations = await userData.create({
            firstName:firstName,
            lastName:lastName,
            userName:userName,
            password:hashedPassword,
            email:email,
            phone:phone
        })
        
        const token  = jwt.sign({email:registrations.email,id:registrations._id},SECRET_KEY);
        res.status(201).json({message:registrations,token:token})

    } catch (error) {
        res.status(401).json({ message: "somethig went wrong", error })
    }
}

module.exports = {register}

// user Exist or not 
    // create a hashed password
    // create a signUp
    // generate token 