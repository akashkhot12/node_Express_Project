const express  = require("express");
const path = require("path");
const bcrypt = require('bcrypt');

const app = express();


// Set EJS as the view engine
app.set('view engine', 'ejs');

// static file
app.use(express.static("public"))

app.get("/",(req,res)=>{
    res.render('login')
})

app.get("/signup",(req,res)=>{
    res.render('signup');
})


app.listen(5000,()=>{
    console.log("server running on port 5000");
})