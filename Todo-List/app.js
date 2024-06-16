const express = require('express');
const bodyParser = require('body-parser');
const {MongoClient} = require('mongodb');
const authRoutes = require('./routes/auth');
const todoRoutes = require('./routes/todo');
const {initDb} = require('./config');

const app = express();

const PORT = process.env.PORT || 3000;
const Mongo_URI = 'mongodb://localhost:27017';

MongoClient.connect(Mongo_URI,{useNewUrlParser:true,useUnifiedTopology:true})
.then(client =>{
    const db= client.db('todoApp');
    initDb(db);
    app.listen(PORT,()=>{
        console.log(`Server is running on Port ${PORT}`);
    })
}).catch(error=>console.error(error));

app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/todos', todoRoutes);