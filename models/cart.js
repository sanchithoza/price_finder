const mongoose = require('mongoose')
const cartSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
})
module.exports = mongoose.model('cart', cartSchema)