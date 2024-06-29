const express = require('express');
const connection = require('../model/database');

const createContact = async(req,res)=>{
    const {fullname,address,contactno,zip,email,user_id} = req.body;

    await connection.query('INSERT INTO details(fullname,address,contactno,zip,email,user_id) values (?,?,?,?,?,?)',[fullname,address,contactno,zip,email,user_id],(err,results)=>{
        if(err) return res.status(500).json({message:err});
        if(!results) return res.status(500).json({message:"invalid creadentials."});

        return res.status(201).json({message:'data inserted successfully.'})
    })
}


const getContactwithUserDetails = async(req,res)=>{
    const{id} =req.params;
    await connection.query('SELECT * FROM details JOIN users ON details.user_id = users.id ',[id],(err,detailResults)=>{
        if(err) return res.status(500).json({message:err});
        return res.status(200).json({contact:detailResults[0]})
    })
}

const getContactByUserId = async(req,res)=>{
    const{user_id} = req.params;
    await connection.query('SELECT * FROM details WHERE user_id =?',[user_id],(err,results)=>{
        if(err) return res.status(500).json({message:err});
        return res.status(200).json({contact:[results]})
    })
}

module.exports = {createContact,getContactwithUserDetails,getContactByUserId}