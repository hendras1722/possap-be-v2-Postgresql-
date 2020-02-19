const connection = require('../configs/mysql')

module.exports = {
  posAll: (limit, activePage, searchName, sortBy, orderBy) => {
    return new Promise((resolve, reject) => {
      const totalData = connection.query('SELECT count (*) FROM products')
      const totalPages = Math.ceil(totalData / limit)
      const firstData = ((limit * activePage) - limit)

      connection.query(`SELECT products.id, products.name, products.description, products.image, products.price, category.name as id_category, products.created_at, products.updated_at FROM products INNER JOIN category ON products.id_category = category.id
      WHERE products.name LIKE '%${searchName}%'
      ORDER BY ${sortBy} ${orderBy}
      LIMIT ${firstData},${limit}`,
        (error, result) => {
          if (error) reject(new Error(error))
          resolve(result)
        })
    })
  },
  posDetail: (posId) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM products WHERE id = ?', posId, (error, result) => {
        if (error) reject(new Error(error))
        resolve(result)
      })
    })
  },
  insertData: (data) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO products SET ?', data, (error, result) => {
        if (error) reject(new Error(error))
        resolve(result)
      })
    })
  },
  updateData: (data, posId) => {
    return new Promise((resolve, reject) => {
      connection.query('UPDATE products SET ? WHERE id = ?', [data, posId], (error, result) => {
        if (error) reject(new Error(error))
        resolve(result)
      })
    })
  },
  deleteData: (posId) => {
    return new Promise((resolve, reject) => {
      connection.query('DELETE FROM products WHERE id = ?', posId, (error, result) => {
        if (error) reject(new Error(error))
        resolve(result)
      })
    })
  }
}