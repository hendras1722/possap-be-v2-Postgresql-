const posStyle = require('../models/pos')
const myConnection = require('../helper/status')

module.exports = {
  posAll: async (request, response) => {
    try {
      const searchName = request.query.name || ''
      // let order = req.query.order
      // let sort = req.query.sort

      const result = await posStyle.posAll(searchName)
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
        image: request.body.image,
        price: request.body.price,
        id_category: request.body.id_category,
        created_at: new Date(),
        updated_at: new Date()
      }

      const result = await posStyle.insertData(data)
      myConnection.response(response, 200, result)
    } catch (error) {
      myConnection.customErrorResponse(response, 404, 'Ups!!! you have problem at insertData')
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
        created_at: new Date(),
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
  test: async (request, response) => {
    try {
      const name = request.query.name;
      console.log(request.query)
      console.log(name);
      const result = await posStyle.searchData(name)

      myConnection.response(response, 200, result)
    } catch (error) {
      myConnection.customErrorResponse(response, 404, 'Ups!!! you have problem at searchData')
    }
  },
  sortData: async (request, response) => {
    try {
      const data = request.params.data;
      const result = await posStyle.sortData(data)
      myConnection.response(response, 200, result)
    } catch (error) {
      myConnection.customErrorResponse(response, 404, 'Ups!!! you have problem at sortData')
    }
  }
}