const Schema = require('mongoose').Schema



const kitchenSchema = new Schema ({
    name: String,
    ovens: Number,
    stoves: Number
})

module.exports = kitchenSchema