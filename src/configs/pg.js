const { Client } = require('pg')

const connection = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'posapp',
  password: '',
  port: 5432,
})

connection.connect(() => console.log("Database Connected"))

module.exports = connection
