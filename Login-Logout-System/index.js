const express = require('express');
const path  = require('path');
const bodyParser = require('body-parser')
const session = require("express-session");

const {v4:uuidv4}=require("uuid")

const app = express();

app.set("view engine",'ejs');

// load static assets
app.use('/static',express.static(path.join(__dirname,'public')))

app.use(bodyParser.urlencoded({extended:true}));

app.use(session({
    secret:uuidv4(),
    resave:false,
    saveUninitialized:true
}));



// home route
app.get('/',(req,res)=>{
   res.render('base',{title:"Login System"})
})

app.listen(5000,()=>{
    console.log("server is up on 5000 port");
})