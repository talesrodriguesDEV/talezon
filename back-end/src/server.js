require('dotenv');
const app = require('./app');
const nodePort = process.env.NODE_PORT;

app.listen(nodePort, () => console.log(`Running at localhost:${nodePort}`));
