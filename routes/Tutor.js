const express = require('express'); 
const { getTutors, createTutors } = require('../controllers/Tutor');

const router = express.Router()

//gets function "getTutors" from controllers/Tutor.js file
router.get("/tutorget", getTutors);
router.post("/tutorcreate", createTutors);

module.exports = router;