const connection = require('../configs/mysql')

module.exports = {
    readUserLevel: (searchName) => {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT user_level.* FROM user_level WHERE name_level LIKE '%${searchName}%'`,
                (error, result) => {
                    if (error) reject(new Error(error))
                    resolve(result)
                })
        })
    },
    createUserLevel: (data) => {
        return new Promise((resolve, reject) => {
            connection.query('INSERT INTO user_level SET ?', data)
            connection.query('SELECT user_level.* FROM user_level', (error, result) => {
                if (error) reject(new Error(error))
                resolve(result)
            })
        })
    },
    updateUserLevel: (data) => {
        const posId = data.id
        return new Promise((resolve, reject) => {
            connection.query('UPDATE user_level SET ? WHERE id = ?', [data, posId])
            connection.query('SELECT user_level.* FROM user_level', (error, result) => {
                if (error) reject(new Error(error))
                resolve(result)
            })
        })
    },
    deleteUserLevel: (posId) => {
        return new Promise((resolve, reject) => {
            connection.query('DELETE FROM user_level WHERE id = ?', posId)
            connection.query('SELECT user_level.* FROM user_level', (error, result) => {
                if (error) reject(new Error(error))
                resolve(result)
            })
        })
    }
}