const knex = require('knex');

const secrets = require('../config/secrets.js')

const environment = secrets.environment;
const config = require('../knexfile.js')[environment];

//{development: {} }
// config.development === config("development")

module.exports = knex(config);
