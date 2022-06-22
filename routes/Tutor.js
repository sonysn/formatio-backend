const express = require('express'); 
const { getTutors } = require('../controllers/Tutor');

const router = express.Router()

router.get("/", getTutors)

module.exports = router;