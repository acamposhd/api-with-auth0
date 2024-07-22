const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const authCheck = require("./middlewares/authCheck");
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/unprotected", (req, res) => {
  res.send("This is an unprotected resource.");
});

app.get("/protected", authCheck, (req, res) => {
  res.json({ message: "This is a protected resource." }); 
});

app.listen(port, () => {
  console.log(` app running on port ${port}`);
});
