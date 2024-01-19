const http = require('http');

http.createServer((req,res)=>{
    res.write("this is bot!, Hello akash");
    res.end();
}).listen(9000)