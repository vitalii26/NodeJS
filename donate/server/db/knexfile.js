module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host : '127.0.1.1',
      user : 'root',
      password : '',
      database : 'fundraising',
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
