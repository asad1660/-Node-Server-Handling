const http = require("http");
const express = require("express");
const app = express();
const routes = require("./routes");

app.use((req, res, next) => {
  console.log("middle ware one");
  next();
});
app.use((req, res, next) => {
  console.log("middle ware two");
  res.send(`<h1>hello from express js</h1>`);
});
// const server = http.createServer(app);

app.listen(3000);
