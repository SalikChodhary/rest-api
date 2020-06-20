const express = require("express");
const bodyParser = require('body-parser')
const app = express();
const mongoose = require("mongoose");
require('dotenv/config')

app.use(bodyParser.json())

const postRoute = require('./routes/posts')

app.use('/posts', postRoute);

//ROUTES
app.get("/", (req, res) => {
  res.send("Home");
});


mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connected!!!")
);

//Server set up
app.listen(4000);
