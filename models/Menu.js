const mongoose = require('mongoose')
const menuSchema = require('../db/schemas/menuSchema')

const Menu = mongoose.model('kitchen', menuSchema)

module.exports = Menu