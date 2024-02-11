const express = require("express");
const { createServer } = require("node:http");
const path = require("path");

const { Server } = require("socket.io");

const app = express();
const server = createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

io.on('connection', (socket)=>{
    console.log(`user is connected`)
    // this will emit the event to all connected sockets
    console.log("new user connected: ", socket.id)
    socket.on('chat message', (msg)=>{
        io.emit('chat message', msg);
        console.log('message: ', msg)
    });
})

server.listen(3000, () =>
  console.log("server is listening on http://localhost:3000")
);
