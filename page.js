const http = require("http");

const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        res.end("Welcome to the home page")
    }
    else if(req.url==="/about"){
        res.end("This is the about page")
    }else{
        res.end(`
    <h1>Oh no!</h1>
<p>No page was found</p>
<a href="/">back home</a>
    `)
    
    }
    
})

server.listen(5000)