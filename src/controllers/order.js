const models = require('../models/order')
const myConnection = require('../helpers/status')
const { v4 } = require('uuid')

module.exports = {
    buy: async (request, response) => {
        const buy = request.body
        console.log(buy)
        if (buy === undefined || buy === '') return console.log('Tidak ada data')

        var a = 0;
        const idBuyer = v4()
        await buy.products.map(async e => {
            const data = {
                idUser: e.idUser,
                idProduct: e.id,
                stock: e.qty,
                catatan: e.catatan
            }
            console.log(data, a)
            const date = {
                date_added: new Date()
            }

            const result = models.buy(idBuyer, data, a, date)
            a = a + 1;
            if (await result === 'error') {
                myConnection.response(response, 400, 'false')
            }
            if (buy.products.length === a) {
                myConnection.response(response, 200, 'terima kasih telah berbelanja!')
            }
        })
        try {

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
    },
    SumPrice: async (request, response) => {
        try {
            const result = await models.SumPrice()
            myConnection.response(response, 200, result)
        } catch (error) {
            myConnection.customErrorResponse(response, 400, "Gagal Get")
        }
    },
    SumPriceMonth: async (request, response) => {
        try {
            const result = await models.SumPriceMonth()
            myConnection.response(response, 200, result)
        } catch (error) {
            myConnection.customErrorResponse(response, 400, "Gagal Get")
        }
    }
}
