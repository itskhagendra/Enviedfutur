const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  console.log("Server Started on Port Number");
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(3000);
console.log("server is Running now")