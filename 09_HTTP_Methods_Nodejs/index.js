const http = require('http')
const fs = require("fs")
const url = require("url")

const myserver = http.createServer((req, res)=>{
    const log = `${Date.now()}: ${req.method}: ${req.url} New Request Received\n`;
    if(req.url === "/favicon.ico") return res.end()

    const myUrl = url.parse(req.url, true)
    console.log(myUrl)
    fs.appendFile("log.txt", log, (err, data)=>{
        switch(myUrl.pathname){
            case '/': 
                if(req.method === "GET") res.end("Home Page")
                break;
            case '/contact': 
                res.end("Contact Page")
                break;
            case '/about': 
                const username = myUrl.query.first_name
                res.end(`I am ${username}`)
                break;
            case "/search":
                const search = myUrl.query.search_query
                res.end(`Your are search for ${search}`)
            case "/signup":
                if(req.method === "GET") {
                    res.end("This is signup form")
                }else if(req.method === "POST") {
                    // insert data into database
                    res.end("Success !!")
                }
                break;
            default:
                res.end("404 Not found")
        }
    });
})

myserver.listen(3000, ()=>{
    console.log("server started on port 3000")
})