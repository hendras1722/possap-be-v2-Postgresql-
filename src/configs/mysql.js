const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'us-cdbr-east-03.cleardb.com',
  user: 'bcf464e6efc54a',
  password: '4c5b3b69',
  database: 'heroku_94cb71c6b7eac6b'
})

connection.connect((error) => {
  if (error) console.log(error)
  console.log('Database connected!')
})

module.exports = connection
