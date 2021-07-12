const mongoose = require('mongoose')
const userMasterSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        default: "customer"
    }
}, {
    timestamps: true
})
module.exports = mongoose.model('userMaster', userMasterSchema)