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
