module.exports = {
    response: (response, status, data, pagination) => {
        const result = {}

        result.status = status || 200
        result.result = data

        return response.status(result.status).json(result)
    },
    responseImage: (response, status, data, pagination) => {
        const result = {}

        result.status = status || 200
        result.result = data[0]
        return response.status(result.status).json(result)
    },
    responseValidation: (response, status, data, pagination) => {
        const result = {}

        result.status = status || 200
        result.result = data[0]
        return response.status(result.status).json(result)
    },
    customResponse: (response, status, data, pagination, pager) => {
        const page = pagination
        const array = []
        console.log(pagination, pager)
        const result = {}

        for (var pages = 1; pages <= pager.totalPages; pages++) {
            console.log(pager.totalPages, 'inipages')
            array[pages - 1] = pages
        }
        result.status = status || 200
        result.result = data
        result.totalPages = page

        return response.status(result.status).json({
            'status': status,
            "totalData": pagination,
            "pagination": array,
            "result": data
        })
    },
    customErrorResponse: (response, status, message) => {
        const result = {}

        result.status = status || 400
        result.message = message

        return response.status(result.status).json(result)
    }
}