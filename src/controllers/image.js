const style = require('../models/image')
const connection = require('../helpers/status')
const { v4 } = require('uuid')
const schema = require('../schema/schema')

module.exports = {
    postImage: async (request, response) => {
        if (!request.file) {
            response.status(400).json({
                message: "File Tidak Valid"
            })
        } else {
            const joi = {
                image: request.file.filename
            }
            const validation = schema.imageSchema.validate(joi)
            if (validation.error) {
                connection.customErrorResponse(response, 400, validation.error.details)
            } else {
                try {
                    const data = {
                        id: v4(),
                        url: `https://backend-posaap.herokuapp.com/uploads/${request.file.filename}`
                    }
                    // @ts-ignore
                    const post = await style.postImage(data)
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
}