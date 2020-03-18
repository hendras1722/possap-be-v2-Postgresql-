const posStyle = require('../models/product')
const myConnection = require('../helpers/status')
const { port } = require('../configs')
const uuidv4 = require('uuid/v4')
const uuid = require('uuid')

module.exports = {
  posAll: async (request, response) => {
    const limit = request.query.limit || 100
    const activePage = request.query.page || 1
    const searchName = request.query.name || ''
    const sortBy = request.query.sortBy || 'id'
    const orderBy = request.query.orderBy || 'ASC'
    const name_category = request.query.name_category || ''
    const idCat = request.query.idCat || ''

    const totalData = await posStyle.countData()
    const totalPages = Math.ceil(totalData / limit)
    const pager = {
      totalPages
    }

    const result = await posStyle.posAll(limit, activePage, searchName, sortBy, orderBy, name_category, idCat)

    myConnection.customResponse(response, 200, result, pager)
    try {
      // const limit = request.query.limit || 30
      // const activePage = request.query.page || 1
      // const searchName = request.query.name || ''
      // const sortBy = request.query.sortBy || 'id'
      // const orderBy = request.query.orderBy || 'ASC'
      // const id_Category = request.query.id_category || ''
      // const idCat = request.query.idCat || ''

      // const result = await posStyle.posAll(limit, activePage, searchName, sortBy, orderBy, id_Category, idCat)

      // myConnection.response(response, 200, result)
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
      // const id = uuidv4()
      const data = {
        name: request.body.name,
        description: request.body.description,
        // image: `http://localhost:${port}/uploads/${request.file.filename}`,
        price: request.body.price,
        stock: request.body.stock,
        id_category: request.body.id_category,
        created_at: new Date(),
        updated_at: new Date()
      }

      const result = await posStyle.insertData(data)
      data.id = result.insertId
      console.log(data.id)
      myConnection.response(response, 200, data, 'Success Uploaded')
    } catch (error) {
      myConnection.customErrorResponse(response, 404, 'Ups!!! you have problem at insertData or File not recruitment')
    }
  },
  updateData: async (request, response) => {
    // console.log(request);
    // const posId = uuidv4()
    try {

      const data = {
        name: request.body.name,
        description: request.body.description,
        // image: request.body.image,
        // image: `http://localhost:4000/uploads/${request.file.filename}`,
        price: request.body.price,
        stock: request.body.stock,
        id_category: request.body.id_category,
        created_at: new Date(),
        updated_at: new Date()
      }

      // console.log(data)
      const posId = request.params.posId
      const result = await posStyle.updateData(data, posId)
      const UpdateData = {
        ...data,
        id: parseInt(posId)
      }
	  console.log(UpdateData)
      myConnection.response(response, 200, UpdateData)
    } catch (error) {
      myConnection.customErrorResponse(response, 404, 'Ups!!! you have problem at updateData')
    }
  },
  deleteData: async (request, response) => {
    try {
      const posId = request.params.posId
      const result = await posStyle.deleteData(posId)
      console.log(posId)
      const deleteData = {
        id: parseInt(posId)
      }
      myConnection.response(response, 200, deleteData)
    } catch (error) {
      myConnection.customErrorResponse(response, 404, 'Ups!!! you have problem at updateData')
    }
  }
}