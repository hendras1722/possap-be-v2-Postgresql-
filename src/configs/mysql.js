const mysql = require('mysql')

const connection = mysql.createPool({
  connectionLimit: 10,
  host: 'us-cdbr-east-03.cleardb.com',
  user: 'bcf464e6efc54a',
  password: '4c5b3b69',
  database: 'heroku_94cb71c6b7eac6b'
})

connection.getConnection((err, connection) => {
  if (err) {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.error('Database connection was closed.')
    }
    if (err.code === 'ER_CON_COUNT_ERROR') {
      console.error('Database has too many connections.')
    }
    if (err.code === 'ECONNREFUSED') {
      console.error('Database connection was refused.')
    }
  }
  if (connection) connection.release()

  return console.log('Database Connected')
})

// connection.connect((error) => {
//   if (error) {
//     console.log(error)
//   }
//   console.log('Database connected!')
// })


module.exports = connection
