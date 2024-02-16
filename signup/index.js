const express = require('express');
const app = express();
const linkdb = require('./connections');


app.use(express.json());


// get details 

app.get('/',async(req,res)=>{
    
})