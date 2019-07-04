const express = require('express')

const House = require('./api/house')

const app = express();
const port = 4000

// app.get('/house', (req, res) => {
//   res.json(House)
// })``

app.listen(port, () => {
  console.log(`Server Starts at ${port}`)
})