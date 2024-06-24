const express = require('express');
const conn = require('./model/config')
const app = express();

app.use(express.json())

app.get('/',(req,res)=>{
    conn.query("select * from users",(err,result)=>{
        if (err) {
            res.status(404).json({message:"something went wrong."})
        } else {
            res.status(200).json({message:result})
        }
    })
});

app.post('/',(req,res)=>{
    const data = req.body;
    conn.query('insert into users set ?',data,(err,result,fields)=>{
        if (err) {
            throw err;
        } else {
            res.send(result);
        }
    })
})

app.put('/:id',(req,res)=>{
    const data =[req.body.username,req.body.email,req.params.id];
    conn.query("update users set username = ? , email = ? where id = ?",data,(err,result)=>{
        if (err) {
            throw err;
        } else {
            res.send(result);
        }
    })
})

app.delete('/:id',(req,res)=>{
    conn.query("delete from users where id ="+ req.params.id,(err,result)=>{
        if (err) {
            throw err;
        } else {
            res.send(result);
        }
    })
})

app.listen(5000,()=>{
    console.log("server on.");
})


