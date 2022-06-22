const express = require('express');
const app = express();
const moongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config()


//connect to db
moongoose.connect(process.env.MONGO_URI)
.then(() => console.log('DB Connected'))

moongoose.connection.on('error', err => {
    console.log(`DB Connection error: ${err.message}`)
})

//bring in routes
const tutorRoutes = require('./routes/Tutor.js')

// middleware
app.use(bodyParser.json());
app.use("/", tutorRoutes);


//This (PORT) is commnt from .env
const port = process.env.PORT || 5000
app.listen(port, () => {console.log(`Nodejs listening on port ${port}`)});