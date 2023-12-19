const express = require('express');
const app = express();

app.set("view engine",'ejs');

// home route
app.get('/',(req,res)=>{
   res.render('base',{title:"Login System"})
})

app.listen(5000,()=>{
    console.log("server is up on 5000 port");
})