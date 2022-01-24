const path = require("path");

const express = require("express");
const multer = require("multer");

const app = express();
// const upload = multer({ dest: "./uploads/" });

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

app.post("/profile", upload.single("file"), (req, res) => {
  console.log("文件信息", req.file);
  res.send(req.file);
});

app.post("/photos/upload", upload.array("file", 2), (req, res, next) => {
  res.send("文件上传成功");
});

app.listen(8080, () => {
  console.log("form-data 服务启动");
});
