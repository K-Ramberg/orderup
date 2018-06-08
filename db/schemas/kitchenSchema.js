const Schema = require('mongoose').Schema
const queSchema = require('./queSchema')



const kitchenSchema = new Schema ({
    name: String,
    ovens: Number,
    stoves: Number,
    ques: [queSchema]
})

module.exports = kitchenSchema