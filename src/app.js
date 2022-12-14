const express = require('express');
const cors = require('cors');
const db = require('./models');
const path = require('path');
require('dotenv').config();

const app = express();

db.mongoose.connect(db.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Database connected');
}).catch((err) => {
    console.log(`Error connect database reason : ${err.message}`);
    process.exit();
});

app.use(express.json());
app.use(cors({
    origin: '*',
}));
app.use(express.static('public'))

app.use('/data', require('./router/data.router'));
app.get('/', (req, res) => {
    res.send('Hello world')
})

module.exports = app;