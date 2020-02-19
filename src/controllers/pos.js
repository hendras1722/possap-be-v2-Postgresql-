const posStyle = require('../models/pos')
const myConnection = require('../helpers/status')
const { port } = require('../configs')

module.exports = {
  posAll: async (request, response) => {
    try {
      const limit = request.query.limit || 30
      const activePage = request.query.page || 1
      const searchName = request.query.name || ''
      const sortBy = request.query.sortBy || 'id'
      const orderBy = request.query.orderBy || 'ASC'

      const result = await posStyle.posAll(limit, activePage, searchName, sortBy, orderBy)

      myConnection.response(response, 200, result)
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
      const data = {
        name: request.body.name,
        description: request.body.description,
        image: `http://localhost:${port}/uploads/${request.file.filename}`,
        price: request.body.price,
        id_category: request.body.id_category,
        created_at: new Date(),
        updated_at: new Date()
      }

      const result = await posStyle.insertData(data)
      myConnection.response(response, 200, result, 'Success Uploaded')
    } catch (error) {
      myConnection.customErrorResponse(response, 404, 'Ups!!! you have problem at insertData or File not recruitment')
    }
  },
  updateData: async (request, response) => {
    try {
      const posId = request.params.posId
      const data = {
        name: request.body.name,
        description: request.body.description,
        image: request.body.image,
        price: request.body.price,
        id_category: request.body.id_category,
        // created_at: new Date(),
        updated_at: new Date()
      }

      const result = await posStyle.updateData(data, posId)
      myConnection.response(response, 200, result)
    } catch (error) {
      myConnection.customErrorResponse(response, 404, 'Ups!!! you have problem at updateData')
    }
  },
  deleteData: async (request, response) => {
    try {
      const posId = request.params.posId
      const result = await posStyle.deleteData(posId)
      response.json(result)
    } catch (error) {
      console.log(error)
    }
  }
}