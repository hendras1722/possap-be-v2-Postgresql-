// // const posStyle = require('../models/order')
// // const myConnection = require('../helper/status')

// module.exports = {
//     UpdateCategory: (data, posId) => {
//         return new Promise((resolve, reject) => {
//             connection.query('UPDATE order SET ? WHERE id = ?', [data, posId], (error, result) => {
//                 if (error) reject(new Error(error))
//                 resolve(result)
//             })
//         })
//     },
//     DeleteCategory: (posId) => {
//         return new Promise((resolve, reject) => {
//             connection.query('DELETE FROM order WHERE id = ?', posId, (error, result) => {
//                 if (error) reject(new Error(error))
//                 resolve(result)
//             })
//         })
//     }
// }