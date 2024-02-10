const mongoose =  require('mongoose');
const connect = mongoose.connect("mongodb://localhost:27017/Login-tut");


// cheack database connect or not 
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
        require:true
    },
   password:{
    type:String,
    require:true
   }
});