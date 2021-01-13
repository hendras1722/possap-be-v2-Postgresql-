const express = require('express')
const Route = express.Router()

const posRouter = require('./product')
const user = require('./user')
const CategoryRouter = require('./category')
const orderRoute = require('./order')
const userLevel = require('./userLevel')
const image = require('./image')

Route
  .use('/pos', posRouter)
  .use('/hdfs', image)
  .use('/category', CategoryRouter)
  .use('/uploads', express.static('./uploads'))
  .use('/user', user)
  .use('/user_level', userLevel)
  .use('/order', orderRoute)

module.exports = Route