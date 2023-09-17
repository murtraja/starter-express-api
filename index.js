const express = require("express");
const app = express();
const fs = require("fs");
app.get("/check", (req, res) => {
  if (fs.existsSync("a_folder")) {
    res.send("Exists");
  } else {
    fs.mkdirSync("a_folder");
    res.send("Created the folder");
  }
});
app.all("/", (req, res) => {
  console.log("Just got a request!");
  res.send("Yo!");
});
app.listen(process.env.PORT || 3000);
