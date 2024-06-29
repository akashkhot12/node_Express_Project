const express = require('express');
const app = express();
require('dotenv').config();
const userRoutes = require('./routes/user')
const authRoutes = require('./routes/auth');
const contactRoutes = require('./routes/contact')

// middleware
app.use(express.json());

// routes
app.use('/user',userRoutes)
app.use('/auth',authRoutes)
app.use('/auth/contact',contactRoutes)

// response 
app.get('/',(req,res)=>{
    res.send('hello owrod,.')
})

// server

app.listen(process.env.PORT,()=>{
    console.log("server in started at port 5000");
})


