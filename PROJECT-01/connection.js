const mongoose = require("mongoose");

async function connectMongoDB(url) {
  return mongoose
    .connect(url)
    .then(() => console.log("mongodb connected"))
    .catch((err) => console.log("Mongo Error", err));
}

module.exports = { connectMongoDB };
