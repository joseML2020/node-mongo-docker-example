const express = require('express')
const bodyParser = require('body-parser');
const config = require('../config.js');

//BD
const connectDB = require('./database')

//ROUTES
const studentRoute =require('./routes/student.routes.js')
const scoreRoute =require('./routes/score.routes.js')

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

connectDB()

app.use('/api/students', studentRoute);
app.use('/api/scores', scoreRoute);

app.listen(config.PORT, () => console.log('Correcto', config.PORT));
