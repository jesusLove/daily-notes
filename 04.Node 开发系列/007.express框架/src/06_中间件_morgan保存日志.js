const fs = require("fs");
const path = require("path");
const express = require("express");
const morgan = require("morgan");

const app = express();

const writeStrean = fs.createWriteStream(
  path.resolve(__dirname, "./logs/access.log"),
  { flags: "a+" }
);
app.use(
  morgan("combined", {
    stream: writeStrean,
  })
);

app.get("/home", (req, res, next) => {
  res.end("Hello morgan");
});

app.listen(8080, () => {
  console.log("服务启动");
});
