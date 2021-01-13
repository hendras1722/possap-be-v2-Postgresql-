const connection = require('../configs/mysql')

module.exports = {
    postImage: (data) => {
        // @ts-ignore
        return new Promise((resolve, rejects) => {
            // @ts-ignore
            connection.query('INSERT INTO multer SET ?', data, (error, result) => {
                // @ts-ignore
                if (error) rejects(new Error(error))
                resolve(result)
            })
        })
    },
    getImage: (id) => {
        return new Promise((resolve, rejects) => {
            const sql = `SELECT * FROM multer WHERE id = '${id}'`
            connection.query(sql, (error, result) => {
                // @ts-ignore
                if (error) rejects(new Error(error))
                resolve(result)
            })
        })
    }
}