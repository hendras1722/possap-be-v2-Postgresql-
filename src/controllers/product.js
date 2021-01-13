const posStyle = require('../models/product')
const myConnection = require('../helpers/status')
const schema = require('../schema/schema')

module.exports = {
    posAll: async (request, response) => {

        try {
            const limit = request.query.limit || 6
            const activePage = request.query.page || 1
            const searchName = request.query.name || ''
            const sortBy = request.query.sortBy || 'id'
            const orderBy = request.query.orderBy || 'ASC'
            const name_category = request.query.name_category || ''
            const idCat = request.query.idCat || ''
            const posId = request.params.posId
            const totalData = await posStyle.countData()
            const totalPages = Math.ceil((totalData / limit))
            const pager = {
                totalPages
            }

            const result = await posStyle.posAll(limit, activePage, searchName, sortBy, orderBy, name_category, idCat, posId)

            myConnection.customResponse(response, 200, result, pager)
        } catch (error) {
            myConnection.customErrorResponse(response, 404, 'Ups!!! you have problem at posAll')
        }
    },
    posDetail: async (request, response) => {
        try {
            const posId = request.params.posId
            const result = await posStyle.posDetail(posId)
            myConnection.response(response, 200, result)
        } catch (error) {
            myConnection.customErrorResponse(response, 404, 'Ups!!! you have problem at posDetail')
        }
    },
    insertData: async (request, response) => {
        try {
            const validation = schema.productSchema.validate(request.body)
            console.log(validation.error?.details, 'inivalidation')
            if (validation.error) {
                myConnection.responseValidation(response, 404, validation.error?.details)
            } else {
                const {
                    name,
                    description,
                    price,
                    image,
                    stock,
                    id_category
                } = request.body

                const data = {
                    name,
                    description,
                    image,
                    price,
                    stock,
                    id_category
                }

                const result = await posStyle.insertData(data)

                myConnection.response(response, 200, result, 'Success Uploaded')
            }
        } catch (error) {
            myConnection.customErrorResponse(response, 404, 'Ups!!! you have problem at insertData or File not recruitment')
        }
    },
    updateData: async (request, response) => {

        const id = request.params.posId
        const data = {
            id,
            name: request.body.name,
            description: request.body.description,
            image: request.body.image,
            price: request.body.price,
            stock: request.body.stock,
            id_category: request.body.id_category,
            updated_at: new Date()
        }

        const result = await posStyle.updateData(data)
        myConnection.response(response, 200, result)
        try {

        } catch (error) {
            myConnection.customErrorResponse(response, 404, 'Ups!!! you have problem at updateData')
        }
    },
    deleteData: async (request, response) => {

        const posId = request.params.posId
        const result = await posStyle.deleteData(posId)
        console.log(posId)
        const deleteData = {
            id: parseInt(posId)
        }
        myConnection.response(response, 200, deleteData)
        try {
        } catch (error) {
            myConnection.customErrorResponse(response, 404, 'Ups!!! you have problem at updateData')
        }
    }
}
