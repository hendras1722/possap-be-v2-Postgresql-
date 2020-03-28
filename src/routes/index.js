const express = require('express')
const Route = express.Router()

const posRouter = require('./product')
const user = require('./user')
const CategoryRouter = require('./category')
const orderRoute = require('./order')
const userLevel = require('./userLevel')
// const purchaseRouter = require('./purchase')

Route
  .use('/pos', posRouter)
  .use('/category', CategoryRouter)
  .use('/uploads', express.static('./uploads'))
  .use('/user', user)
  .use('/user_level', userLevel)
  .use('/order', orderRoute)
// .use('/purchase', purchaseRouter)

module.exports = Route