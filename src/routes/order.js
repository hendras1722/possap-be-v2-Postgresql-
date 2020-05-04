const express = require('express')
const route = express.Router()

const { buy, readOrder, readOrderDetail,orderDetail } = require('../controllers/order')

route
    .post('/', buy)
    .get('/api', readOrderDetail)
    .get('/', readOrder)
    .get('/:posId', orderDetail)
module.exports = route
