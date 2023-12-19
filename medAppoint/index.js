const express  = require('express');
const app = express();
const{MongoClient} = require('mongodb');
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const database = "ecom";

const connections = async(req,res,next)=>{
    try {
        let result = await client.connect();
    let db = result.db(database);
    return db.collection("products")
    next()
    } catch (error) {
        
    }
}

app.listen(5000,()=>{
    console.log("server is up");
})