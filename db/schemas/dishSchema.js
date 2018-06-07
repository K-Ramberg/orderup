const Schema = require('mongoose').Schema


const dishSchema = new Schema ({
    price: Number,
    ingredients: String,
    cookTime: Number,
    ovensNeeded: Number,
    stovesNeeded: Number
})

module.exports = dishSchema