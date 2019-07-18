
const mongoose = require('mongoose');

const mongoUri = 'mongodb://mongo:27017/overview';

const db = mongoose.connect(mongoUri,  { useNewUrlParser: true });

module.exports = db;