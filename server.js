const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const react = require('react');
const config = require('./config');
const mongo = require('./lib/mongo');
const router = require('./network/routes')

const DB_URL = `mongodb+srv://${config.dbUser}:${config.dbPass}${config.dbHost}`;
mongo(DB_URL);

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/static', express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jsx');


router(app);


const server = app.listen(config.port, ()=>{
    console.log(`Listening http://localhost:${server.address().port}`);
})
