const Schema = require('mongoose').Schema
const dishSchema = require('./dishSchema')



const queSchema = new Schema ({
    Restaurant: String,
    dishes: [dishSchema]
})

module.exports = queSchema