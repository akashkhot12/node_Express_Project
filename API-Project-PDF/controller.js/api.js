const userDetails = require('../model/model');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const SECRET_KEY = 'APIPROJECTPDF'


// registrations of user
const register = async (req, res) => {
    const { firstname,lastname,username,password,email,phone} = req.body;
    try{
        const userExist = await userDetails.findOne({email:email});
        if (userExist) {
           return res.status(401).json({message:"user already exist"})
        }

        const hashedPassword = await bcrypt.hash(password,10);

        const result = await userDetails.create({
            firstname:firstname,
            lastname:lastname,
            username:username,
            password:hashedPassword,
            email:email,
            phone:phone
        })
       const token = jwt.sign({email:result.username,id:result._id},SECRET_KEY)
       return res.status(201).json({message:result,token:token})

    
    } catch (error) {
        res.status(500).json({ message: "somethig went wrong", error })
    }
}


const login  = async(req,res)=>{
    const {email,password} = req.body;
    try {
        const validUser = await userDetails.findOne({email:email});
        if (!validUser) {
            return res.status(401).json({message:"User not valid"})
        }

        const matchPassword = await bcrypt.compare(password,validUser.password);

        if (!matchPassword) {
            return res.status(401).json({message:"Invalide Credentials"})
        }

        const token = jwt.sign({email:validUser.email,id:validUser._id},SECRET_KEY);
        return res.status(201).json({message:"login successfully",token:token})

    } catch (error) {
        res.status(500).json({ message: "somethig went wrong", error })  
    }
}


const getAllUsers = async(req,res)=>{
    let getDetails = await userDetails.find();
   if (!getDetails) {
        return res.status(401).json({message:"something went wrong"})
   }
   return res.status(201).json({message:getDetails})
}


const getByID = async(req,res)=>{
    
    let getUserByID = await userDetails.findById(req.params.id);
    if (!getUserByID) {
        return res.status(401).json({message:"something went wrong"})
    }
    return res.status(201).json({message:getUserByID})
}

module.exports = { register,login,getAllUsers ,getByID};


