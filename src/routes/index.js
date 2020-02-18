const express = require('express')
const Route = express.Router()

const posRouter = require('./pos')
// const user = require('./user')
const CategoryRouter = require('./category')

Route
  .use('/pos', posRouter)
  .use('/category', CategoryRouter)

module.exports = Route