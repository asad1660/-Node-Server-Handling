//const http = require("http");
const bodyPaser = require("body-parser");
const express = require("express");
const app = express();
//const routes = require("./routes");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(
  bodyPaser.urlencoded({
    extended: false,
  })
);
app.use(adminRoutes);
app.use(shopRoutes);
app.use((req, res, next) => {
  res.status(404).send(`<h1>404 page not found</h1>`);
});
// const server = http.createServer(app);

app.listen(3000);
