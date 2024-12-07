const express = require("express");

const morgan = require("morgan");

const app = express();

app.use(morgan("common"));

app.get("/", function (req, res) {
  return "Hello World from server";
});

module.exports = app;
