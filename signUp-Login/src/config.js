const { response } = require('express');
const mongoose =  require('mongoose');
const connect = mongoose.connect("mongodb://localhost:27017/Login-tut");


// check database connect or not 
connect.then(()=>{
    console.log("database connected successfully.");
   
})
.catch(()=>{
    console.log("database cannot be connected.");
});

// create a schema 
const loginSchema  = new mongoose.Schema({
    name:{
        type:String,
        require:false
    },
    email:{
        type:String,
        require:true
    },
   password:{
    type:String,
    require:true
   }
});

// create a model (collection part )

const collection = new mongoose.model("users",loginSchema);

module.exports = collection;