const Schema = require('mongoose').Schema
const dishSchema = require('./dishSchema')



const menuSchema = new Schema ({
    Restaurant: String,
    dishes: [dishSchema]
})

module.exports = menuSchema