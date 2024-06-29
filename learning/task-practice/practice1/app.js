const express = require('express');
const app = express();
require('dotenv').config();


// middleware 
app.use(express.json());


app.listen(process.env.PORT,()=>{
    console.log("server is up");
})

