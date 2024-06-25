const express = require('express');
const connection = require('./config')

const getDataAll = async(req,res)=>{
    connection.query('select * from nodeapi',(err,result)=>{
        if (err) {
            return err;
        }   
        res.status(200).json({message:result})
    });

}

module.exports = {getDataAll}