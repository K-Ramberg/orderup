const mongoose = require('mongoose')
const userSchema = require('../db/schemas/userSchema')

const User = mongoose.model('kitchen', userSchema)

module.exports = User