const mysql = require('mysql');
require('dotenv').config();


const connectDb = mysql.createConnection({
    host:"localhost",
    user: 'root',
    password:'',
    database: 'node-mysql'
});

db.connect((err)=>{
    if(err){
        console.error('MySQL connection error:', err);
        throw err;
    }
    console.log('MySQL Connected...');
})

module.exports = connectDb;


