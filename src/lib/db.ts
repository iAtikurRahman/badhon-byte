import mysql from 'mysql2/promise'

let pool: mysql.Pool | undefined

export function getDbPool() {
  if (!pool) {
    pool = mysql.createPool({
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT) || 3306,
      database: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      waitForConnections: true,
      connectionLimit: 10,
    })
  }
  return pool
}
