const express = require('express')
const Route = express.Router()

const {
    AllCategory,
    DetailCategory,
    InsertCategory,
    UpdateCategory,
    DeleteCategory
} = require('../controllers/category')

Route
    .get('/', AllCategory)
    .get('/:posId', DetailCategory)
    .post('/', InsertCategory)
    .patch('/:posId', UpdateCategory)
    .delete('/:posId', DeleteCategory)

module.exports = Route