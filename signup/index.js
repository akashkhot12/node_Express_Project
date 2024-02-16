const express = require('express');
const connect = require('./connections')
const app = express();
const User = require('./User');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(express.json());

app.get('/registers',async(req,res)=>{
    let db = await connect();
    let showDeatails = await db.findOne();
    res.send(showDeatails);
})


app.post('/signup',async(req,res)=>{
    try {
        const {username,email,password} = req.body;
        // cheack if existing user or not 
        const existingUser = await User.findOne({email});
        if (existingUser) {
            return res.status(400).send({ error: 'Email is already registered' });
        }

        // create a new user 
        const newUser = new User({sername,email,password});
        await newUser.save();
        res.status(201).json({ message: 'User created successfully' });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
})

app.listen(5000,()=>{
    console.log("server is up on 5000 port ");
})