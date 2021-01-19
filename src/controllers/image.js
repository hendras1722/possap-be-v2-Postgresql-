const style = require('../models/image')
const connection = require('../helpers/status')
const { v4 } = require('uuid')
const schema = require('../schema/schema')

module.exports = {
    postImage: async (request, response) => {
        const joi = {
            image: request.file.filename
        }
        const validation = schema.imageSchema.validate(joi)
        if (validation.error) {
            connection.customErrorResponse(response, 400, validation.error?.details)
        } else {
            try {
                const data = {
                    id: v4(),
                    url: `http://localhost:4000/uploads/${request.file.filename}`
                }
                // @ts-ignore
                const post = await style.postImage(data)
                console.log(post.affectedRows, 'inpost')
                if (post.affectedRows > 0) {
                    const result = await style.getImage(data.id)
                    connection.responseImage(response, 200, result, "Berhasil Upload")
                }
                // if (post) {
                // }
            } catch (error) {
                connection.customErrorResponse(response, 400, "Gagal Upload")
            }
        }
    }
}