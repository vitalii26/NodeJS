import dotenv from 'dotenv';
import path from 'path';
dotenv.config({path: './.env'});
const __dirname = path.resolve();

export default {
  development: {
    client: process.env.DB_CONNECTION,
    connection: {
      host : process.env.DB_HOST,
      user : process.env.DB_USERNAME,
      password : process.env.DB_PASSWORD,
      database : process.env.DB_DATABASE,
      charset: 'utf8',
      timezone: 'UTC',
      dateStrings: true
    },
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds'
    }
  }
    
};
