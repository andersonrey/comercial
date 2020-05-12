require('dotenv').config();

const config = {
    port: process.env.PORT,
    dbUser: process.env.DB_USER,
    dbName: process.env.DB_NAME,
    dbPass: process.env.DB_PASS,
    dbHost: process.env.DB_HOST
}

module.exports = config;