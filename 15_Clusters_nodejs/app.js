const express = require('express')
const PORT = 3000

const app = express()

app.get("/", (req, res)=>{
    res.json({message: `server is running at id : ${process.pid}`})
})

app.listen(PORT, ()=> console.log(`server is running at http://localhost:${PORT}`))