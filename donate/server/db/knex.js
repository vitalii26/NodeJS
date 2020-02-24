const environment = process.env.NODE_ENV || 'development';
import config from './knexfile.js';
const EnvironmentConfig = config[environment];
import knex from 'knex';
const connection = knex(EnvironmentConfig);
 export default connection;