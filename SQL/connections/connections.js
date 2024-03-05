const mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'postgres',
    password : 'Akash3975',
    database : 'crud',
  }); 

connection.connect((err)=>{
    if (err) {
        console.log(err);
    }
    else{
        console.log("database connected");
    }
});

