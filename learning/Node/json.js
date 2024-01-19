const http =  require('http');

http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'applications\json'});
    res.write(JSON.stringify({name:'akash khot',email:'aksshkho97@gmail.com'}))
    res.end()
}).listen(4500)