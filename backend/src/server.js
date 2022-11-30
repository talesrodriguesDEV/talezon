require('dotenv');
const app = require('./app');

app.listen(3001, () => console.log(`Running at localhost:${3001}`));
