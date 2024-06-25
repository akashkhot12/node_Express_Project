const mysql = require('mysql');


const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'user&contact'
})

connection.connect((err)=>{
    if (err) {
        console.log('error');
    } else {
        console.log('connected');
    }
})