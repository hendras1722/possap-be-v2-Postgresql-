const express = require('express')
const route = express.Router()

const { buy, readOrder, readOrderDetail } = require('../controllers/order')

route
    .post('/', buy)
    .get('/', readOrder)
    .get('/or/', readOrderDetail)
module.exports = route