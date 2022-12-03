require('dotenv').config();

module.exports = {
    uri: process.env.NODE_ENV == 'production' ? process.env.DB_URI_PROD : process.env.DB_URI_DEV,
}