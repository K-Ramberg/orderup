const Schema = require('mongoose').Schema


const dishSchema = new Schema({
    name: String,
    price: Number,
    ingredients: String,
    cookTime: Number,
    ovensNeeded: Number,
    stovesNeeded: Number
})

module.exports = dishSchema