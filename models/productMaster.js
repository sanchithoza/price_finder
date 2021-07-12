const mongoose = require('mongoose')
const productMasterSchema = new mongoose.Schema({
    company: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    subCategory: {
        type: String
    },
    modelNumber: {
        type: String
    },
    discription: {
        type: String
    },
    dealerPrice: {
        type: Number,
        default: 0,
        required: true
    },
    customerPrice: {
        type: Number,
        default: 0,
        required: true
    }
}, {
    timestamps: true
})
module.exports = mongoose.model('productMaster', productMasterSchema)