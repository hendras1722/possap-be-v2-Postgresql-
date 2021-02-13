module.exports = {
    api: (request, response, next) => {
        const headerAPI = request.headers["api-msa"]
        if (headerAPI === undefined) {
            response.json({
                message: 'Anda Tidak Diijinkan'
            })
        } else {
            // request.token = headerAPI
            console.log(response, 'inirequest')
            next()
        }
    }
}