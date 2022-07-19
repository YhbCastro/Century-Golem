require('dotenv').config();
const path = require("path");
const { DATABASE_URL } = process.env;
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'postgresql',
    connection: "postgres://tgrggnys:6gucAhEctxS0y5rfuAsy9GNEYrNoXB2U@heffalump.db.elephantsql.com/tgrggnys",
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
