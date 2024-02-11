const express = require("express");
const { connectMongoDB } = require("./connection.js");
const { logReqRes } = require("./middlewares");
const { router } = require("./routes/user.js");
const app = express();

// Connection
connectMongoDB("mongodb://127.0.0.1:27017/job-search");

// Middlewere
app.use(express.urlencoded({ extended: false }));
// app.use(logReqRes("log.txt"));

// Routes
app.use("/api/users", router);

app.listen(3000, () =>
  console.log("Server is running on http://localhost:3000")
);
