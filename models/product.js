const {Schema, model} = require('mongoose')

const product = new Schema({
    name: String,
    category: Number,
    imageUrl: String,
    types: [Number],
    sizes: [Number],
    price: Number,
    rating: Number
})

module.exports = model('Product', product)