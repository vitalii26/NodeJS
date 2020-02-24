require('dotenv').config({path: './.env'});
module.exports = {
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
