const express = require("express");
const app = express();

app.use(express.static("public"));

app.set("port", process.env.PORT || 3003);
app.get("/", (req, res) => {
  res.end("Hello world");
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
