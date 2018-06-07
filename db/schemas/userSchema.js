const Schema = require('mongoose').Schema
const kitchenSchema = require('./kitchenSchema')
const menuSchema = require('./menuSchema')


const userSchema = new Schema ({
    name: String,
    restaurant: String,
    menus: [menuSchema],
    kitchens: [kitchenSchema]
})

module.exports = userSchema