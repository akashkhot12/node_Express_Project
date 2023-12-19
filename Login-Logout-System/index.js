const express = require('express');
const path  = require('path')
const app = express();

app.set("view engine",'ejs');

// load static assets
app.use('/static',express.static(path.join(__dirname,'public')))

// home route
app.get('/',(req,res)=>{
   res.render('base',{title:"Login System"})
})

app.listen(5000,()=>{
    console.log("server is up on 5000 port");
})