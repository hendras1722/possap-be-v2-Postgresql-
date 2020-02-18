const express = require('express')
const Route = express.Router()

const {
    AllCategory,
    DetailCategory,
    InsertCategory,
    UpdateCategory,
    DeleteCategory,
    limPages,
    searchData,
    sortData
} = require('../controllers/category')

Route
    .get('/search/', AllCategory)
    .get('/search/:posId', DetailCategory)
    .post('/uploads/', InsertCategory)
    .patch('/:posId', UpdateCategory)
    .delete('/remove/:posId', DeleteCategory)
    .get('/search/:name1', searchData)
    .get('/sort/:data', sortData)
    .get('/page/:limited', limPages)

module.exports = Route