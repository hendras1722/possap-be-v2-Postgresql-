const userModel = require('../models/user')
const helper = require('../helpers/')
const JWT = require('jsonwebtoken')
const { JWT_KEY } = require('../configs')
const myConnection = require('../helpers/status')
const { v4 } = require('uuid')

module.exports = {
    getUser: async (request, response) => {
        try {
            const detail = request.query.detail
            // const limit = request.query.limit || 100
            // const activePage = request.query.page || 1
            // const searchName = request.query.name || ''
            // const sortBy = request.query.sortBy || 'id'
            // const orderBy = request.query.orderBy || 'ASC'
            const result = await userModel.getUser(detail)
            myConnection.responseValidation(response, 200, result)
        } catch (error) {
            myConnection.customErrorResponse(response, 404, 'Ups!!! you have problem at AllCategory')
        }
    },
    DeleteUser: async (request, response) => {
        try {
            const posId = request.params.posId
            const result = await userModel.DeleteUser(posId)
            myConnection.response(response, 200, result)
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
            myConnection.response(response, 200, result)
        } catch (error) {
            myConnection.customErrorResponse(response, 404, 'Ups!!! you have problem at UpdateCategory')
        }
    },
    register: async (request, response) => {
        const salt = helper.generateSalt(16)
        const hashPassword = helper.setPassword(request.body.password, salt)
        const data = {
            id: v4(),
            name: request.body.name,
            email: request.body.email,
            Status: request.body.Status,
            salt: hashPassword.salt,
            password: hashPassword.passwordHash,
            created_at: new Date(),
            updated_at: new Date()
        }
        const result = await userModel.register(data)
        console.log(result)
        myConnection.response(response, 200, result)
        try {
        } catch (error) {
            myConnection.customErrorResponse(response, 404, 'Ups!!! you have problem at UpdateCategory')
        }
    },
    login: async (request, response) => {
        const data = {
            password: request.body.password,
            email: request.body.email
        }

        console.log(data.email)

        const emailValid = await userModel.checkEmail(data.email)
        // console.log(emailValid, 'inivalid')
        if (emailValid.length > 0) {
            const dataUser = emailValid[0]
            const hashPassword = helper.setPassword(data.password, dataUser.salt)

            if (hashPassword.passwordHash === dataUser.password) {
                try {
                    const token = JWT.sign({
                        id: dataUser.id
                    }, JWT_KEY, {
                        expiresIn: '2h'
                    })

                    delete dataUser.salt
                    delete dataUser.password

                    dataUser.token = token

                    response.json(dataUser)
                } catch (e) {
                    response.status(400).json({
                        status: 400,
                        message: e
                    })
                }
            } else {
                response.status(400).json({
                    status: 400,
                    message: 'Password Salah'
                })
            }
        } else {
            response.json({
                message: 'Data Tidak di Temukan',
                status: 400
            })
        }
    }
}
