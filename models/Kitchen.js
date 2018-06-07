const mongoose = require('mongoose')
const kitchenSchema = require('../db/schemas/kitchenSchema')

const Kitchen = mongoose.model('kitchen', kitchenSchema)

module.exports = Kitchen