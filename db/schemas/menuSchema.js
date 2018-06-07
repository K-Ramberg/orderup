const Schema = require('mongoose').Schema
const dishSchema = require('./dishSchema')



const menuSchema = new Schema ({
    restaurant: String,
    dishes: [dishSchema]
})

module.exports = menuSchema