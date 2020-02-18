const posStyle = require('../models/category')
const myConnection = require('../helper/status')

module.exports = {
    AllCategory: async (request, response) => {
        try {
            const searchName = request.query.name || ''
            // const data = request.params.data
            const result = await posStyle.AllCategory(searchName)
            myConnection.response(response, 200, result)
        } catch (error) {
            myConnection.customErrorResponse(response, 404, 'Ups!!! you have problem at AllCategory')
        }
    },
    DetailCategory: async (request, response) => {
        try {
            const posId = request.params.posId
            const result = await posStyle.DetailCategory(posId)
            myConnection.response(response, 200, result)
        } catch (error) {
            myConnection.customErrorResponse(response, 404, 'Ups!!! you have problem at DetailCategory')
        }
    },
    InsertCategory: async (request, response) => {
        try {
            const data = {
                name: request.body.name,
                created_at: new Date(),
                updated_at: new Date()
            }

            const result = await posStyle.InsertCategory(data)
            myConnection.response(response, 200, result)
        } catch (error) {
            myConnection.customErrorResponse(response, 404, 'Ups!!! you have problem at InsertCategory')
        }
    },
    UpdateCategory: async (request, response) => {
        try {
            const posId = request.params.posId
            const data = {
                name: request.body.name,
                created_at: new Date(),
                updated_at: new Date()
            }

            const result = await posStyle.UpdateCategory(data, posId)
            myConnection.response(response, 200, result)
        } catch (error) {
            myConnection.customErrorResponse(response, 404, 'Ups!!! you have problem at UpdateCategory')
        }
    },
    DeleteCategory: async (request, response) => {
        try {
            const posId = request.params.posId
            const result = await posStyle.DeleteCategory(posId)
            myConnection.response(response, 200, result)
        } catch (error) {
            myConnection.customErrorResponse(response, 404, 'Ups!!! you have problem at DeleteCategory')
        }
    },
    limPages: async (request, response) => {
        try {
            const limited = request.params.limited
            const result = await posStyle.limPages(limited)
            myConnection.response(response, 200, result)
        } catch (error) {
            myConnection.customErrorResponse(response, 404, 'Ups!!! you have problem at limPages')
        }
    },
    searchData: async (request, response) => {
        try {
            const name = request.params.name
            const result = await posStyle.searchData(name)
            myConnection.response(response, 200, result)
        } catch (error) {
            myConnection.customErrorResponse(response, 404, 'Ups!!! you have problem at searchData')
        }
    },
    sortData: async (request, response) => {
        try {
            const data = request.params.data
            const result = await posStyle.sortData(data)
            myConnection.response(response, 200, result)
        } catch (error) {
            myConnection.customErrorResponse(response, 404, 'Ups!!! you have problem at sortData')
        }
    }
}