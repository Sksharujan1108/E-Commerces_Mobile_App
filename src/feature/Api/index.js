const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const crypto = require('crypto');
const nodemailer = require('nodemailer');

const app = express();
const port = 8000;
const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const jwt = require("jsonwebtoken");

// Connect to MongoDB database
const URI = 'mongodb+srv://sksharujan27:SKsharu2708@cluster0.nbvtgdr.mongodb.net';
//  'mongodb+srv://sharujanvirat1219:Sksharu1127@cluster0.skb9owg.mongodb.net'


mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected To MongoDB");
  })
  .catch((err) => {
    console.log("Error Connection To MongoDB", err.message);
  });

app.listen(port, () => {
  console.log("Server Is Running On Port 8000");
});