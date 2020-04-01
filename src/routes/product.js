const express = require('express')
const Route = express.Router()
const corsOptions = require('../configs')
const cors = require('cors')
const upload = require('../controllers/upload')

const {
  posAll,
  posDetail,
  insertData,
  updateData,
  deleteData
} = require('../controllers/product')

const {
  reduceProduct
} = require('../controllers/order')

const {
  authentication,
  authorization
} = require('../helpers/auth')

Route
  .get('/', posAll)
  .get('/:posId', posDetail)
  .post('/', upload.single('image'), insertData)
  .patch('/:posId', upload.single('image'), updateData)
  .delete('/:posId', deleteData)


// .post('/product/reduce', reduceProduct)
module.exports = Route