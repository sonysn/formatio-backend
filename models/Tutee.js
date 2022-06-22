const mongoose = require('mongoose');
const { StringDecoder } = require('string_decoder');

const tuteeSchema = new mongoose.Schema({
    tuteeName: {
        type: String,
        trim: true,
        required: true,
    },
    tuteeClass: {
        type: String,
        trim: true
    },
    tuteeBirthday: {
        type: String,
        trim: true
    },
    tuteeEmail: {
        type: String,
        trim: true,
    },
    tuteePhonenumber: {
        type: String,
        trim: true
    },
    tuteeParent_guardianPhonenumber: {
        type: String,
        trim: true
    },
    tuteeTutorAssigned: {
        type: String,
        trim: true
    }
});

module.exports = mongoose.model("Tutee", tuteeSchema);