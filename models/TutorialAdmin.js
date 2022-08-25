const mongoose = require('mongoose');

const tutorialAdminSchema = new mongoose.Schema({
    tutorialAdminName: {
        type: String,
        trim: true,
        required: true,
    },
    tutorialAdminEmail: {
        type: String,
        trim: true,
        required: true,
    },
    tutorialAdminContactAddress: {
        type: String,
        trim: true
    },
    tutorialAdminPassword: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model("Tutorial Admin", tutorialAdminSchema)