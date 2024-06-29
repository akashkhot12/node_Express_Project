const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

console.log(connection);

connection.connect((err)=>{
    if (err) {
        console.log('error');
    } else {
        console.log('database connected');
    }
})

module.exports = connection;