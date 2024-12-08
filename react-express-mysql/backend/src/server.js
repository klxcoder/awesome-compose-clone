const express = require("express");

const morgan = require("morgan");

const database = require("./database");

const app = express();

app.use(morgan("common"));

app.get("/", async (req, res, next) => {
  return res.json("Hello from default route /");
  try {
    const [rows] = await database.raw('select VERSION() version');
    const version = rows[0].version;
    res.json({ message: `Hello from MySQL ${version}` });
  } catch (error) {
    next(error);
  }
});

app.get("/healthz", function (req, res) {
  res.send("I am happy and healthy\n");
});

module.exports = app;
