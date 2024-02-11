const express = require("express")
const app = express()

app.get("/", (req, res)=>{
    res.send("Home page")
})
app.get("/about", (req, res)=>{
    res.send(`This is about page, Hello ${req.query.first_name} & Your age is : ${req.query.age}`)
})

app.listen(3000, ()=> console.log("server started on port 3000"))