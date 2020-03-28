const express = require('express')
const Route = express.Router()

const {
    readUserLevel,
    createUserLevel,
    updateUserLevel,
    deleteUserLevel
} = require('../controllers/userLevel')

Route
    .get('/', readUserLevel)
    .post('/', createUserLevel)
    .patch('/:posId', updateUserLevel)
    .delete('/:posId', deleteUserLevel)

module.exports = Route