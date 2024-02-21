const express = require('express');
const app = express();
const {Pool} = require('pg');
const router = require('./routes/userRoutes');


const pool = new Pool({
    host: "localhost",
    user: "postgres",
    password: "Akash3975",
    database: "Contacts"
});

// Test PostgreSQL connection
pool.connect((err, client, done) => {
    if (err) {
        console.error('Error connecting to PostgreSQL:', err);
    } else {
        console.log('Connected to PostgreSQL');
        done(); // Release the client back to the pool
    }
});


app.use('/user',router)

app.get('/',async(req,res)=>{
    res.send("hello")
})

app.listen(5000,()=>{
    console.log("server is up");
})