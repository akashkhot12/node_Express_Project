
// require('dotenv').config();

const mysql = require('mysql');

const connections = mysql.createConnection({
    // host: process.env.DB_Host,
    // user: process.env.DB_User,
    // password: process.env.DB_Password,
    // database: process.env.DB_Database,

    host:'localhost',
    user:"root",
    password:'',
    database:"practice-panel"
})

// connections.connect((err)=>{
//     if (err) {
//         return console.log("err");
//     } else {
//         return console.log("Databse connected.");
//     }
// })

module.exports = connections;