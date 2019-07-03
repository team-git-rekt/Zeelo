// import mongoose from './mongoose'
// import db from './index'
const mongoose = require('mongoose')
const db = require('./index.js')

// Do we need this? 
mongoose.Promise = global.Promise

const houseSchema = new mongoose.Schema({
  price: String,
  bedrooms: Number,
  bathrooms: Number,
  sqft: String,
  address: String,
  imageUrl: String
})

const house = mongoose.model('house', houseSchema)

module.exports = house

