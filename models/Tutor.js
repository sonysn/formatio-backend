const mongoose = require('mongoose');

const tutorSchema = new mongoose.Schema({
    tutorName: {
        type: String,
        trim: true,
        required: true,
    },
    tutorEmail: {
        type: String,
        trim: true,
    },
    tutorPhonenumber: {
        type: String,
        trim: true
    },
    tutorSubject: {
        type: String,
        trim: true,
    },
    tutorRole: {
        type: String,
        trim: true
    },
    tutorPassword: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Tutor", tutorSchema);