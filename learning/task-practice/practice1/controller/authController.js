const connection = require('../model/database');
const bcrypt = require('bcrypt');
require('dotenv').config();
const jwt = require('jsonwebtoken');


const login = async(req,res)=>{
    const{email,password} =req.body;
   
    await connection.query('SELECT * FROM users  WHERE email = ? ',[email],(err,results) =>{
        if(err) return res.status(500).json({message:err});
        console.log(results);
        if(results.length === 0) return res.status(400).json({message:"Invalid user."});
        bcrypt.compare(password,results[0].password,(err,results)=>{
            if(err) return res.status(500).json({message:err});
            if(!results) return res.status(500).json({message:"invalid creadentials."});

            const token  = jwt.sign({id:results.id},process.env.JWT_SECRET,{expiresIn:3600})
            return res.status(200).json({message:"login successfull.",token})

        })
    })
}

const logout = async(req,res)=>{
    return res.status(200).json({message:"logout successfull."}
    )
}

const forgotPassword = async(req,res)=>{
    
}

const resetPassword = async(req,res)=>{
    
}

const changePassword = async(req,res)=>{
    const {token,newPassword} = req.body;

    await jwt.verify(token,process.env.JWT_SECRET,(err,decoded)=>{
        if(err) return res.status(500).json({message:err});
        const hashedPaswword = bcrypt.hashSync(newPassword,10);

        const query = 'UPDATE users SET password = ? where id = ?';

        connection.query(query,[hashedPaswword,decoded.id],(err,results)=>{
            if(err) return res.status(500).json({message:err});
            if(!results) return res.status(500).json({message:"invalid creadentials"});

            return res.status(201).json({message:"update successfully."})
            
        })
    })
}


module.exports = {login,logout,changePassword}