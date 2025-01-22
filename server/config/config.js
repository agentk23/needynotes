module.exports = {
    development: {
      dialect: 'sqlite',
      storage: '/home/costin/Projects/needynotes/needyDB.db'
    },
    test: {
      dialect: 'sqlite',
      storage: ':memory:'
    },
    production: {
      dialect: 'sqlite',
      storage: './database.sqlite3'
    }
  };