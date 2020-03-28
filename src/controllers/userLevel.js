const posStyle = require('../models/userLevel')
const myConnection = require('../helpers/status')

module.exports = {
    readUserLevel: async (request, response) => {
        try {
            const searchName = request.query.name || ''
            const result = await posStyle.readUserLevel(searchName)
            myConnection.response(response, 200, result)
        } catch (error) {
            myConnection.customErrorResponse(response, 404, 'Ups!!! you have problem at userlevel')
        }
    },
    createUserLevel: async (request, response) => {
        try {
            const data = {
                name_level: request.body.name_level,
                created_at: new Date(),
                updated_at: new Date()
            }

            const result = await posStyle.createUserLevel(data)
            myConnection.response(response, 200, result)
        } catch (error) {
            myConnection.customErrorResponse(response, 404, 'Ups!!! you have problem at userlevel')
        }
    },
    updateUserLevel: async (request, response) => {
        try {
            const id = request.params.posId
            const data = {
                id,
                name_level: request.body.name_level,
                updated_at: new Date()
            }

            const result = await posStyle.updateUserLevel(data)
            myConnection.response(response, 200, result)
        } catch (error) {
            myConnection.customErrorResponse(response, 404, 'Ups!!! you have problem at userlevel')
        }
    },
    deleteUserLevel: async (request, response) => {
        const posId = request.params.posId
        const result = await posStyle.deleteUserLevel(posId)
        myConnection.response(response, 200, result)
        try {
        } catch (error) {
            myConnection.customErrorResponse(response, 404, 'Ups!!! you have problem at userlevel')
        }
    }
}