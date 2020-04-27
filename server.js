const express = require('express');
const bodyParser = require('body-parser');

const router = require('./network/routes');

const PUERTO = 3000;

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

router(app);
app.use('/app', express.static('public'));
app.listen(PUERTO);

console.log('The app run in port 3000');
