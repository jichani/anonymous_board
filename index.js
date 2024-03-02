const express = require("express");
const mysql = require("mysql");
const dbConfig = require("./config/db.js");
const connection = mysql.createConnection(dbConfig);

const app = express();

app.use(express.static("public"));

app.set("port", process.env.PORT || 3003);

app.get("/", (req, res) => {
  let datas = [];
  let page = 1;
  if (req.query && req.query.page) {
    page = req.query.page;
  }
  const cntPerPage = 9;

  connection.query("SELECT count(*) as total FROM article where board_id 1", (error, rows) => {
    if (error) throw error;

    let totalCnt = rows[0]["total"];
    let maxPage = Math.floor(totalCnt / cntPerPage) + (totalCnt % cntPerPage > 0 ? 1 : 0);
  });
});

app.get("/index", (req, res) => {
  res.sendFile(__dirname + "/public/html/index.html");
});

app.get("/class", (req, res) => {
  res.sendFile(__dirname + "/public/html/class.html");
});

app.get("/view", (req, res) => {
  res.sendFile(__dirname + "/public/html/view.html");
});

app.get("/write", (req, res) => {
  res.sendFile(__dirname + "/public/html/write.html");
});

app.listen(app.get("port"), () => {
  console.log("express server running on port 3003");
});
