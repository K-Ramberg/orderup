const Schema = require('mongoose').Schema
const dishSchema = require('./dishSchema')



const queSchema = new Schema ({
    name: String,
    restaurant: String,
    dishes: [dishSchema]
})

module.exports = queSchema