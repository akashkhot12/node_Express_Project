const userModels = require("../models/user");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const signup = async(req,res)=>{

    const{username,email,password}=req.body;
    try {
        const existingUser = await userModels.findOne({email:email})
        if (existingUser) {
            return res.status(400).json({message:"user already exists"})
        }

        const hashedPassword = await bcrypt.hash(password,10);

        const result = await userModels.create({
            email:email,
            password:hashedPassword,
            username:username 
        });

        const token = jwt.sign({email:result.email,id:result._id},SECRET_KEY);
        res.status(201).json

    } catch (error) {
        
    }
}

const signin = async(req,res)=>{
    
}

module.exports ={signup,signin}
