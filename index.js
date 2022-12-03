const app = require('./src/app');
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server running on : http://localhost:${PORT}`);
})

module.exports = app;