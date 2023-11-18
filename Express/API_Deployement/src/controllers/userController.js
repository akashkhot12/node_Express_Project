const userModels = require("../models/user");

const signup = async(req,res)=>{

    const{username,email,password}=req.body;
    try {
        const existingUser = await userModels.findOne({email:email})
        if (existingUser) {
            return res.status(400).json({message:"user already exists"})
        }
    } catch (error) {
        
    }
}

const signin = async(req,res)=>{
    
}

module.exports ={signup,signin}
