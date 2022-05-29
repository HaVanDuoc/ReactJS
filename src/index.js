// Express
const express = require("express");
const app = express();
const port = 3000;

// Morgan
const morgan = require("morgan");
app.use(morgan("combined"));

// Template engine - Handlebars
const engine = require("express-handlebars");
const path = require("path");
app.engine("hbs", engine.engine({extname: 'hbs'}));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

console.log('path: ', path.join(__dirname, "resources/views"));

app.get("/", (req, res) => {
  res.render('home');
});

app.get("/news", (req, res) => {
  res.render('news');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
