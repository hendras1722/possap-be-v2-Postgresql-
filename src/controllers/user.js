const userModel = require('../models/user')
const helper = require('../helpers/')
const JWT = require('jsonwebtoken')
const {
    JWT_KEY
} = require('../configs')
const myConnection = require('../helpers/status')

module.exports = {
    getUser: async (request, response) => {
        try {
            const limit = request.query.limit || 5
            const activePage = request.query.page || 1
            const searchName = request.query.name || ''
            const sortBy = request.query.sortBy || 'id'
            const orderBy = request.query.orderBy || 'ASC'
            const result = await userModel.getUser(limit, activePage, searchName, sortBy, orderBy)
            myConnection.response(response, 200, result)
        } catch (error) {
            myConnection.customErrorResponse(response, 404, 'Ups!!! you have problem at AllCategory')
        }
    },
    DeleteUser: async (request, response) => {
        try {
            const posId = request.params.posId
            const result = await userModel.DeleteUser(posId)
            const deleteUser = {
                id: parseInt(posId)
            }
            myConnection.response(response, 200, deleteUser)
        } catch (error) {
            myConnection.customErrorResponse(response, 404, 'Ups!!! you have problem at DeleteCategory')
        }
    },
    UpdateUser: async (request, response) => {
        try {
            const posId = request.params.posId
            const data = {
                name: request.body.name,
                email: request.body.email,
                Status: request.body.Status,
                created_at: new Date(),
                updated_at: new Date()
            }

            const result = await userModel.UpdateUser(data, posId)
            myConnection.response(response, 200, data)
        } catch (error) {
            myConnection.customErrorResponse(response, 404, 'Ups!!! you have problem at UpdateCategory')
        }
    },
    register: async (request, response) => {
        try {
            const salt = helper.generateSalt(18)
            const hashPassword = helper.setPassword(request.body.password, salt)
            const data = {
                name: request.body.name,
                email: request.body.email,
                Status: request.body.Status,
                salt: hashPassword.salt,
                password: hashPassword.passwordHash,
                created_at: new Date(),
                updated_at: new Date()
            }
            const result = await userModel.register(data)
            response.json(result)
        } catch (error) {
            console.log(error)
        }
    },
    login: async (request, response) => {
        const data = {
            password: request.body.password,
            email: request.body.email
        }

        const emailValid = await userModel.checkEmail(data.email)
        const dataUser = emailValid[0]
        const hashPassword = helper.setPassword(data.password, dataUser.salt)

        if (hashPassword.passwordHash === dataUser.password) {
            const token = JWT.sign({
                email: dataUser.email,
                id: dataUser.id
            }, JWT_KEY, {
                expiresIn: '9h'
            })

            delete dataUser.salt
            delete dataUser.password

            dataUser.token = token

            response.json(dataUser)
        } else {
            response.json({
                message: 'Login error!'
            })
        }
    }
}