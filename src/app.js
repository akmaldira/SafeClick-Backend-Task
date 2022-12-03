const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const db = require('./models');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors({
    origin: '*',
}));

db.mongoose.connect(db.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Database connected');
}).catch((err) => {
    console.log(`Error connect database reason : ${err.message}`);
    process.exit();
});

app.use('/data', require('./router/data.router'));

app.listen(PORT, () => {
    console.log(`server running on : http://localhost:${PORT}`);
})