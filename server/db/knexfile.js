import * as Path from 'node:path'
import * as URL from 'node:url'

import dotenv from 'dotenv'
dotenv.config()

if (!process.env.DB_PASSWORD) {
  console.error('DB password undefined!')
  process.exit(1)
}

const dbPassword = process.env.DB_PASSWORD

const __filename = URL.fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)

export default {
  development: {
    client: 'mssql', // Change the client to 'mssql' for Azure SQL Server
    connection: {
      host: 'todoappserver1.database.windows.net',
      user: 'todoappadmin',
      password: dbPassword,
      database: 'todoAppDB',
      options: {
        encrypt: true, // Use encryption
      },
    },
    pool: {
      min: 2,
      max: 10,
    },
  },

  test: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: ':memory:',
    },
    migrations: {
      directory: Path.join(__dirname, 'migrations'),
    },
    seeds: {
      directory: Path.join(__dirname, 'seeds'),
    },
    pool: {
      afterCreate: (conn, cb) => conn.run('PRAGMA foreign_keys = ON', cb),
    },
  },

  production: {
    client: 'mssql', // Change the client to 'mssql' for Azure SQL Server
    connection: {
      host: 'todoappserver1.database.windows.net',
      user: 'todoappadmin',
      password: dbPassword,
      database: 'todoAppDB',
      options: {
        encrypt: true, // Use encryption
      },
    },
    pool: {
      min: 2,
      max: 10,
    },
  },
}
