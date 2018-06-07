const mongoose = require('mongoose')
const queSchema = require('../db/schemas/queSchema')

const Que = mongoose.model('que', queSchema)

module.exports = Que