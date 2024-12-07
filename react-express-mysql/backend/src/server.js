const express = require("express");

const morgan = require("morgan");

const app = express();

app.use(morgan("common"));

app.get("/", function (req, res) {
  res.send("Hello World from server");
});

app.get("/healthz", function (req, res) {
  res.send("I am happy and healthy\n");
});

module.exports = app;
