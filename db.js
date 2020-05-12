const db = require('mongoose');
const config = require('./config');

db.Promise = global.Promise;

async function conect(url ){
   await db.connect(url , {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: config.dbName
    });

    console.log('DB conectada con exito');
}

module.exports = conect;