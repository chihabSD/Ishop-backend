const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const bodyParser = require("body-parser");
const fs = require('fs')
const path = require('path')
const cors =  require('cors')

const app = express();


mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to database"); 
});

mongoose.connection.on("error", err => {
  console.error(`Failed to connect to database: ${err}`); 
});

// -------- Middlewares------//
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
// -------- Routes ------//
const dirPath = path.resolve(__dirname, './routes')
fs.readdirSync(dirPath).map((r) => app.use(require('./routes/'+r)))
module.exports = app;