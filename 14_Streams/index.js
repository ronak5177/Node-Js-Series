const fs = require("fs");
const express = require("express");
const status = require("express-status-monitor");
const zlib = require("zlib");

const app = express();

app.use(status());

// Stream Read (sample_file.txt) ---> zipper ---> writeStream

fs.createReadStream("./sample_file.txt").pipe(
  zlib.createGzip().pipe(fs.createWriteStream("./sample_file.zip"))
);

app.get("/", (req, res) => {
  const stream = fs.createReadStream("./sample_file.txt", "utf-8");
  stream.on("data", (chunk) => res.write(chunk));
  stream.on("end", () => res.end());
});

app.listen(3000, () => {
  console.log(`listening at port http://localhost:3000`);
});
