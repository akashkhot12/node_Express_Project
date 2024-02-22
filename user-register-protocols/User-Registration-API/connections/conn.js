const express = require("express");
const{MongoClient} = require("mongodb")
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const database = "API-User-Register" ;


const connections = async(req,res)=>{
    let result = await client.connect();
    let db = await result.db(database);
    return db.collection('User-validations')
}

module.exports = connections;