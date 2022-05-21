const mongoose = require("mongoose");

const orgAccount = new mongoose.Schema({
    address: {
        type: String,
        required: true
    },
    acccountType: {
        type: String,
        required: true,
        enum: ['offsetter', 'consumer'],
        default: 'consumer'
    },
    lastUpdated: {
        type: Date,
        required: true,
        default: Date.now
    },
});

const OrgAccount = mongoose.model("orgAccount", orgAccount);

module.exports = OrgAccount;