const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
    name: {type:String, required: true, default: "abc"},
    price: {type:Number, required: true, default: 0},
})

const model = mongoose.model('Products', productsSchema);

module.exports = model;