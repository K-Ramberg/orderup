const Schema = require('mongoose').Schema
const queSchema = require('./queSchema')



const kitchenSchema = new Schema ({
    ovens: Number,
    Stoves: Number,
    ques: [queSchema]
})

module.exports = kitchenSchema