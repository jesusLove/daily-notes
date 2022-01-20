const express = require("express");

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  console.log("app use 0");
  // 如果不调用 next，后面的中间件被阻止
  next();
});

app.get("/", (req, res, next) => {
  res.end("Hello express");
});

app.get("/home", (req, res, next) => {
  console.log("home 1");
  res.end("Home");
});

app.post("/login", (req, res, next) => {
  console.log("home 2", req.body);
  res.end("login 成功");
});

app.listen(8080, () => {
  console.log("服务启动了 ~ ");
});
