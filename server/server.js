const express = require("express");
var cors = require("cors");
var app = express();

app.use(cors());
const port = 3000;

app.get("/", (req, res) => {
  res.send("Node server is running!");
});

app.get("/api/deadline", (req, res) => {
  const today = new Date();
  const deadline = new Date(2026, 0, 1, 0, 0, 0, 0); // start of the year 2026
  const count = parseInt((deadline - today) / 1000);
  res.send({ secondsLeft: count });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
