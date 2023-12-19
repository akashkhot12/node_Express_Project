const express  =  require('express');
const axios = require('axios')
const app = express();
const port = 5000;

app.get('/',(req,res)=>{
    res.send("fetch api on /fetchData")
})
app.get('/fetchData',async(req,res)=>{
    try {
        let response  = await axios.get('https://api.publicapis.org/entries')
        let data = response.data
        res.json(data)
    } catch (error) {
        console.error('Error fetching data:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
    }
})

app.listen(port,()=>{
    console.log("server is started");
})