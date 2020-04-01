const express = require('express')
const route = express.Router()

const { buy, readOrder } = require('../controllers/order')

route
    .post('/', buy)
    .get('/', readOrder)
module.exports = route