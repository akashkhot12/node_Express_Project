 require('dotenv').config();

 const express = require("express");
 const expressLayout = require('express-ejs-layouts');


 const app = express();
 const PORT = 5000||process.env.PORT;

 app.use(express.static('public'));

 app.use(expressLayout);
 app.set('layout','./layout/main');
 app.set('view engine','ejs');

 app.get('',(req,res)=>{
    res.send("hello world")
 })

 app.listen(PORT,()=>{
    console.log(`App listening on port ${PORT}`);
 })