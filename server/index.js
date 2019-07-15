<<<<<<< HEAD
const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const houseSchema = require("../zeelo-database/houseSchema.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../react-client/dist"));

app.get('/houses/:id', (req, res) => {
  houseSchema.find({id: req.params.id}, (err, data) => {
    if (err) res.status(500).send(err);
    res.status(200).send(data);
  })
});

app.listen(port, () => {
  console.log(`Server Starts at ${port}`);
});
=======
const express = require('express');
const House = require('./api/house');
const app = express();
const port = 4000;
const bodyParser = require('body-parser');
const houseSchema = require('../zeelo-database/houseSchema.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/houses', (req, res) => {
  
});

app.listen(port, () => {
  console.log(`Server Starts at ${port}`)
});
>>>>>>> 347a057b90341581e8c9e5f1e7a39588e935e45c
