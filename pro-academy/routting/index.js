const http = required('http');

const server = http.createServer((req,res)=>{
    let path = req.url;
    if (path==='/' || path.toLocaleLowerCase()==='/home') {
        res.end("your are in home page")
    }
    else if (path.toLocaleLowerCase()==='/about') {
        res.end("your are in about page")
    } else {
        res.end("something went wrong")
    }
})


server.listen(5000,()=>{
    console.log("server is start");
})