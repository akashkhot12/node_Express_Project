const express = require('express');
const router = require('./router');
const app = express();
const port = 5000;


app.use(express.json());

app.use('/getData',router)


app.listen(port,()=>{
console.log('server is started.');
})

