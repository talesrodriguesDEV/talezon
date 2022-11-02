require('dotenv');
const app = require('./app');
const port = process.env.PORT;

app.listen(port, () => console.log(`Runing at localhost:${port}`));
