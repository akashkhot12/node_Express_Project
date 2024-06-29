const express = require('express');
const app = express();
require('dotenv').config();
const userRoutes = require('./routes/user')


// middleware 
app.use(express.json());

// routes

app.use('/api/users',userRoutes);


app.listen(process.env.PORT,()=>{
    console.log("server is up");
})

