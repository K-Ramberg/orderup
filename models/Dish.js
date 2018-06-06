const mongoose = require('mongoose')
const dishSchema = require('../db/schemas/dishSchema')

const Dish = mongoose.model('dish', dishSchema)

module.exports = Dish