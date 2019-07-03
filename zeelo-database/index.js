// import mongoose from 'mongoose'
const mongoose = require('mongoose')

const mongoUri = 'mongodb://localhost/zeelo'

const db = mongoose.connect(mongoUri)

module.exports = db