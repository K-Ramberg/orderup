const mongoose = require('mongoose')
const queSchema = require('../db/schemas/queSchema')

const Que = mongoose.model('kitchen', queSchema)

module.exports = Que