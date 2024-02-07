const express = require('express')
const path = require("path")
const userRoute = require('./routes/user')
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/blogify').then(e=> console.log("MongoDB Connected"))

const app = express()
const PORT = 5000;

app.set('view engine', 'ejs')
app.set('views', path.resolve("./views"))

app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res)=>{
    res.render("home")
})

app.use('/user', userRoute)

app.listen(PORT, ()=> console.log(`server started at http://localhost:${PORT}`))

