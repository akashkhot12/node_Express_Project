const mysql = require('mysql');


const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'test'
});

connection.connect((err)=>{
    if (err) {
        return err;
    }
    console.log('database connected successfully');
})

module.exports = connection;