const models = require('../models/order')
const myConnection = require('../helpers/status')
const uuidv4 = require('uuid/v4')

module.exports = {
    buy: async (request, response) => {
        try {
            const buy = request.body
            if (buy === undefined || buy === '') return console.log('Tidak ada data')

            var a = 0;
            const idBuyer = uuidv4()
            await buy.products.map(e => {
                const data = {
                    idProduct: e.id,
                    stock: e.qty
                }
                console.log(data, a)
                const date = {
                    date_added: new Date()
                }

                const result = models.buy(idBuyer, data, a, date)
                a = a + 1;
                if (result === 'error') {
                    myConnection.response(response, 400, 'false')
                }
                if (buy.products.length === a) {
                    myConnection.response(response, 200, 'terima kasih telah berbelanja!')
                }
            })

        } catch (error) {
            // console.log(error)
            myConnection.response(response, 404, 'your request not found')
        }
    },
    readOrder: async (request, response) => {
        try {
            const result = await models.readOrder()
            console.log(result)
            myConnection.response(response, 200, result)
        } catch (error) {
            myConnection.response(response, 404, 'your request not found')
        }
    },
    readOrderDetail: async (request, response) => {
        try {
            const result = await models.readOrderDetail()
            console.log(result)
            myConnection.response(response, 200, result)
        } catch (error) {
            myConnection.response(response, 404, 'your request not found')
        }
    },
    orderDetail: async (request, response) => {
        try {
            const posId = request.params.posId
            const result = await models.orderDetail(posId)
            myConnection.response(response, 200, result)
        } catch (error) {
            myConnection.customErrorResponse(response, 404, 'Ups!!! you have problem at posDetail')
        }
    }
}
