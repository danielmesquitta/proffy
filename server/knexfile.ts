import { resolve } from 'path'
import knex from 'knex'

module.exports = {
  client: 'sqlite3',
  connection: {
    filename: resolve(__dirname, 'src', 'database', 'database.sqlite'),
  },
  migrations: {
    directory: resolve(__dirname, 'src', 'database', 'migrations'),
  },
  useNullAsDefault: true,
}
