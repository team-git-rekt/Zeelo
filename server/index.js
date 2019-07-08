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