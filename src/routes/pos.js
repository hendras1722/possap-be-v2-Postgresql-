const express = require('express')
const Route = express.Router()
const multer = require('multer')
// const upload = multer({dest: '/uploads/'})

const {
  posAll,
  posDetail,
  insertData,
  updateData,
  deleteData,
  limPages,
  // searchData,
  sortData,
  test
} = require('../controllers/pos')

Route
  .get('/search/', posAll)
  .get('/search/:posId', posDetail)
  .get('/test', test)
  .post('/uploads/', insertData)
  .patch('/:posId', updateData)
  .delete('/remove/:posId', deleteData)
  // .get('/search', searchData)
  .get('/sort/:data', sortData)
  .get('/page/:limited', limPages)

module.exports = Route