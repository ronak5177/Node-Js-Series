const http = require('http')
const fs = require("fs")

const myserver = http.createServer((req, res)=>{
    const log = `${Date.now()}: ${req.url} New Request Received\n`;
    fs.appendFile("log.txt", log, (err, data)=>{

        switch(req.url){
            case '/': 
                res.end("Home Page")
                break;
            case '/contact': 
                res.end("Contact Page")
                break;
            case '/about': 
                res.end("I am ronak patel")
                break;
            default:
                res.end("404 Not found")
        }
    });
})

myserver.listen(3000, ()=>{
    console.log("server started on port 3000")
})