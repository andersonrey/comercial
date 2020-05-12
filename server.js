const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const db = require('./db');
const router = require('./network/routes')

const DB_URL = `mongodb+srv://${config.dbUser}:${config.dbPass}${config.dbHost}`;

db(DB_URL);

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

router(app);
app.use('/static', express.static(path.join(__dirname, 'public')));

const server = app.listen(config.port, ()=>{
    debug(`Listening http://localhost:${server.address().port}`);
})
