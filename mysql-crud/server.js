const express = require('express');
const mysql = require('mysql');


const app = express();

const db = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'node-mysql'
});

db.connect((err)=>{
  if(err){
    console.log(err);
  }else{
    console.log("database connected");
  }
});


app.get('/',(req,res)=>{
  res.send('hello world')
})

app.listen(8000,()=>{
  console.log("server is started.");
})