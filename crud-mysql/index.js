const express = require('express');
const app = express();
const PORT = 3000;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const connection = require('./model/config');


app.use(express.json());


// register user 

app.use('/singup',(req,res)=>{
    const {firstname, lastname, username, password, email, phone} = req.body;

    const hashedPassword = bcrypt.hashSync(password,10);

    const query = ` insert into auth (firstname, lastname, username, password, email, phone, created, updated) values (?, ?, ?, ?, ?, ?, NOW(), NOW())`;

    connection.query(query,[firstname, lastname, username, hashedPassword, email, phone],(err,result)=>{
        if (err) {
            return res.status(500).send(err);
          }
          res.status(201).send({ message: 'User registered successfully', userId: result.insertId });
    })
})





app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});