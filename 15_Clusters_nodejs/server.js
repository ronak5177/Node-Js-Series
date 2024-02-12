const cluster = require('cluster');
const os = require('os')
const express = require('express');


const cpus = os.cpus().length


// or
// const cpus = os.availableParallelism()

if (cluster.isPrimary){
    // console.log(`Primary ${process.pid} is running`)

    for (let i = 0; i < cpus; i++) {
        cluster.fork()
    }
} else{
    const app = express()
        const PORT = 3000

        app.get("/", (req, res)=>{
            return res.json({message: `server is running at id : ${process.pid}`})
        })
        
        app.listen(PORT, ()=> console.log(`server is running at http://localhost:${PORT}`))
}
