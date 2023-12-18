const express = require('express');
const app = express();

app.set("view engine",'ejs')
app.get('/',(req,res)=>{
   res.render('base',{tittle:"Login System"})
})

app.listen(5000,()=>{
    console.log("server is up on 5000 port");
})