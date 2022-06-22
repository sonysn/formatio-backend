const Tutor = require('../models/Tutor');

const getTutors = (req, res) => {
    //read from mongoDB database with mongoose
    const tutors = Tutor.find()
    .then((foundtutors) => {
        res.json({ tutors: foundtutors })
    })
    .catch(err => console.log(err));
}

const createTutors = (req, res) => {
    const tutor = new Tutor(req.body);
    // console.log("CREATING TUTOR: ", req.body);
    //saves to mongoDB database with mongoose
    tutor.save((err, result) => {
        if(err) {
            return res.status(400).json({
                error: err
            });
        }
        res.json({
            tutor: result
        });
    });
}

module.exports = {
    getTutors,
    createTutors
};