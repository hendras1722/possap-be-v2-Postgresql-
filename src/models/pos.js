const connection = require('../configs/mysql')

module.exports = {
  posAll: (searchName) => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT products.id, products.name, products.description, products.image, products.price, category.name as id_category, products.created_at, products.updated_at FROM products JOIN category ON products.id_category = category.id`, (error, result) => {
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
  },
  limPages: (limited) => {
    return new Promise((resolve, reject) => {
      const AllData = connection.query('SELECT count (*) FROM products')
      const AllPages = Math.ceil(AllData / limited)
      connection.query(`SELECT products.id, products.name, products.description, products.image, products.price, category.name as id_category, products.created_at, products.updated_at FROM products JOIN category ON products.id_category = category.id LIMIT ${limited}`, (error, result) => {
        if (error) reject(new Error(error))
        resolve(result)
      })
    })
  },
  searchData: (name) => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM products WHERE name LIKE '%${name}%'`, (error, result) => {
        if (error) reject(new Error(error))
        console.log(name)
        resolve(result)
      })
    })
  },
  sortData: (data) => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM products ORDER BY ${data}`, (error, result) => {
        if (error) reject(new Error(error))
        resolve(result)
      })
    })
  }
}