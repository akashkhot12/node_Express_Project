const http = require('http');

http.createServer((req,res)=>{
    res.write("hello akash this is bot.");
    res.end();
}).listen(5000,()=>{
    console.log("this code is run on port 5000");
})