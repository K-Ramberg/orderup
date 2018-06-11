const Schema = require('mongoose').Schema
const menuSchema = require('./menuSchema')
const dishSchema = require('./dishSchema')


const userSchema = new Schema ({
    name: String,
    restaurant: String,
    menus: [menuSchema],
    testQue: [dishSchema]
})

module.exports = userSchema