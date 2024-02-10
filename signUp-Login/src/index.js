const express = require("express");
const path = require("path");
const bcrypt = require('bcrypt');
const collection = require("./config");
const { log } = require("console");
const app = express();

// convert data into the json 
app.use(express.json());

app.use(express.urlencoded({ extended: false }))


// Set EJS as the view engine
app.set('view engine', 'ejs');

// static file
app.use(express.static("public"))

app.get("/", (req, res) => {
    res.render('login')
})

app.get("/signup", (req, res) => {
    res.render('signup');
})


// register methode
app.post('/signup', async (req, res) => {
    const data = {
        name: req.body.username,
        email: req.body.email,
        password: req.body.password
    }

    // checked user already exist in databse 
    const existingUser = await collection.findOne({ email: data.name })

    if (existingUser) {
        res.send("user already exists");
    }
    else {

        // hashed password use methode 
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(data.password, saltRounds);

        data.password = hashedPassword //replace the hashed pasword with original password 


        const userdata = await collection.insertMany(data);
        console.log(userdata);
    }
})

// login user 
 app.post("/login",async(req,res)=>{
    try{
        const check = await collection.findOne({email:req.body.email});
        if (!check) {
            res.send("this user cannot found")
        }

        // compare the hash password from the database with the pain text .

        const isPasswordMatch = await bcrypt.compare(req.body.password,check.password)
        if (isPasswordMatch) {
            res.render("home")
        }
        else{
             res.send("wrong password")
        }
    }
    catch{
        res.send("wrong Credentials");
    }
 })



app.listen(5000, () => {
    console.log("server running on port 5000");
})