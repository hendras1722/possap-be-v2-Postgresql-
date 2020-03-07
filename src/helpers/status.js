module.exports = {
    response: (response, status, data, pagination) => {
        const result = {}

        result.status = status || 200
        result.result = data

        return response.status(result.status).json(result)
    },
    customResponse: (response, status, data, pagination) => {
        const page = []
        const result = {}

        for (var pages = 1; pages <= pagination.totalPages; pages++) {
            page[pages - 1] = pages
        }
        result.status = status || 200
        result.result = data
        result.totalPages = page

        return response.status(result.status).json(result)
    },
    customErrorResponse: (response, status, message) => {
        const result = {}

        result.status = status || 400
        result.message = message

        return response.status(result.status).json(result)
    }
}