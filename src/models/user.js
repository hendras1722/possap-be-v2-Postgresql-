const connection = require('../configs/mysql')

module.exports = {
    getUser: (detail) => {
        return new Promise((resolve, reject) => {
            // @ts-ignore
            if (detail) {
                connection.query(`SELECT user.id, user.email, user.name, user.Status, user_level.name_level FROM user INNER JOIN user_level ON user.Status = user_level.id  WHERE user.id = '${detail}'`,
                    (error, result) => {
                        // @ts-ignore
                        if (error) reject(new Error(error))
                        resolve(result)
                    })
            } else {
                connection.query(`SELECT user.id, user.email, user.name, user.Status, user_level.name_level FROM user INNER JOIN user_level ON user.Status = user_level.id`,
                    (error, result) => {
                        // @ts-ignore
                        if (error) reject(new Error(error))
                        resolve(result)
                    })
            }
        })
    },
    DeleteUser: (posId) => {
        return new Promise((resolve, reject) => {
            connection.query('DELETE FROM user WHERE id = ?', posId)
            connection.query('SELECT user.*, user_level.name_level FROM user LEFT JOIN user_level ON user.Status = user_level.id', (error, result) => {
                // @ts-ignore
                if (error) reject(new Error(error))
                resolve(result)
            })
        })
    },
    UpdateUser: (data, posId) => {
        return new Promise((resolve, reject) => {
            connection.query('UPDATE user SET ? WHERE id = ?', [data, posId])
            connection.query('SELECT user.*, user_level.name_level FROM user LEFT JOIN user_level ON user.Status = user_level.id', (error, result) => {
                // @ts-ignore
                if (error) reject(new Error(error))
                resolve(result)
            })
        })
    },
    register: (data) => {
        console.log(data, 'inidata')
        return new Promise((resolve, reject) => {
            connection.query('INSERT INTO user SET ?', data, (error, result) => {
                // @ts-ignore
                if (error) reject(new Error(error))
                resolve(result)
            })
            // connection.query('SELECT user.*, user_level.name_level FROM user LEFT JOIN user_level ON user.Status = user_level.id', (error, result) => {
            //     // @ts-ignore
            //     if (error) reject(new Error(error))
            //     resolve(result)
            // })
        })
    },
    checkEmail: (email) => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT user.id, user.salt, user.password FROM user WHERE email = ?', email, (error, result) => {
                // @ts-ignore
                if (error) reject(new Error(error))
                resolve(result)
            })
        })
    }
}