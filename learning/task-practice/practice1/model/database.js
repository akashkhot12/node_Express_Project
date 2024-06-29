const mysql = require('mysql');

require('dotenv').config();

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'chetna'
})


connection.connect((err)=>{
    if (err) {
        console.log(err);
    }
    else{
        console.log("databse access.");
    }
})


module.exports = connection