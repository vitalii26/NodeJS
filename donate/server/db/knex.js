const environment = process.env.NODE_ENV || 'development';
const config = require('../knexfile');
const EnvironmentConfig = config[environment];
const knex = require('knex');
const connection = knex(EnvironmentConfig);

module.exports = connection;