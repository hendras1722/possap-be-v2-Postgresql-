const posStyle = require('../models/order')
const myConnection = require('../helper/status')

module.exports = {
    reduceProduct: async (request, response) => {
        try {
            const posId = request.params.posId
            const data = {
                name: request.body.name,
                price: request.body.price,
                created_at: new Date(),
                updated_at: new Date()
            }

            const result = await posStyle.updateData(data, posId)
            myConnection.response(response, 200, result)
        } catch (error) {
            myConnection.customErrorResponse(response, 404, 'Ups!!! you have problem at updateData')
        }
    },
    deleteOrder: async (request, response) => {
        try {
            const posId = request.params.posId
            const result = await posStyle.deleteData(posId)
            myConnection.response(response, 200, result)
        } catch (error) {
            myConnection.customErrorResponse(response, 404, 'Ups!!! you have problem at deleteData')
        }
    }
}