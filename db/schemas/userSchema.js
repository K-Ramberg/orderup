const Schema = require('mongoose').Schema
const kitchenSchema = require('./kitchenSchema')
const menuSchema = require('./menuSchema')
const dishSchema = require('./dishSchema')


const userSchema = new Schema ({
    name: String,
    restaurant: String,
    menus: [menuSchema],
    kitchens: [kitchenSchema],
    testQue: [dishSchema]
})

module.exports = userSchema