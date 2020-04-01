const express = require('express')
const Route = express.Router()

const {
    register,
    login,
    getUser,
    DeleteUser,
    UpdateUser,
    CreateUser

} = require('../controllers/user')

Route
    .get('/', getUser)
    .post('/register', register)
    .post('/login', login)
    .delete('/:posId', DeleteUser)
    .patch('/:posId', UpdateUser)


module.exports = Route