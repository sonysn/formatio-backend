const express = require('express');
const app = express();

//bring in routes
const tutorRoutes = require('routes/post.js')

app.get("/api", tutorRoutes.getTutors);

const port = 5000
app.listen(port, () => {console.log('Nodejs listening on port 5000')});