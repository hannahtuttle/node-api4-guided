require('dotenv').config()

const server = require('./api/server.js');

const secrets = require('./config/secrets.js')
const defaults = require('./config/default.js')


const port = defaults.port;
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
