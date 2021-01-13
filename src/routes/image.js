const express = require('express')
const route = express.Router()
const upload = require('../controllers/upload')

const { postImage } = require('../controllers/image')

route
    .post('/upload', upload.single('image'), postImage)
module.exports = route
