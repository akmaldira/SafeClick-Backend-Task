const mongoose = require('mongoose');
const dbConfig = require('../config/database');

module.exports = {
    mongoose,
    uri: dbConfig.uri,
    Data: require('./Data')(mongoose),
}