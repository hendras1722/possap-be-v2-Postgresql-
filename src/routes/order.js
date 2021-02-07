const express = require('express')
const route = express.Router()

const { buy, readOrder, readOrderDetail, orderDetail, SumPrice, SumPriceMonth } = require('../controllers/order')

route
    .post('/', buy)
    .get('/api', readOrderDetail)
    .get('/', readOrder)
    .get('/sumprice', SumPrice)
    .get('/sumpricemonth', SumPriceMonth)
    .get('/:posId', orderDetail)
module.exports = route
