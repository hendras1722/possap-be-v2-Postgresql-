const connection = require('../configs/mysql')

module.exports = {
  posAll: (limit, activePage, searchName, sortBy, orderBy, name_category, idCat, posId) => {
    return new Promise((resolve, reject) => {
      const totalData = connection.query('SELECT count (*) FROM products')
      const totalPages = Math.ceil(totalData / limit)
      const firstData = ((limit * activePage) - limit)

      connection.query(`SELECT products.*, category.name_category FROM products LEFT JOIN category ON products.name_category = category.id  WHERE products.name LIKE '%${searchName}%' AND products.name_category LIKE '%${idCat}%'
      ORDER BY ${sortBy} ${orderBy}
      LIMIT ${ firstData}, ${limit}`,
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
      connection.query('ALTER TABLE products AUTO_INCREMENT = 1')
      connection.query('INSERT INTO products SET ?', data)
      connection.query('SELECT products.*, category.name_category FROM products LEFT JOIN category ON products.name_category = category.id', (error, result) => {
        if (error) reject(new Error(error))
        resolve(result)
      })
    })
  },

  updateData: (data) => {
    const posId = data.id
    // console.log([data, posId])
    return new Promise((resolve, reject) => {
      connection.query('UPDATE products SET ? WHERE id = ?', [data, posId])
      connection.query('SELECT products.*, category.name_category FROM products LEFT JOIN category ON products.name_category = category.id ', (error, result) => {
        if (error) reject(new Error(error))
        resolve(result)
      })
    })
  },

  deleteData: (posId) => {
    return new Promise((resolve, reject) => {
      connection.query('DELETE FROM products WHERE id = ?', posId)
      connection.query('SELECT products.*, category.name_category FROM products LEFT JOIN category ON products.name_category = category.id', (error, result) => {
        if (error) reject(new Error(error))
        // connectio?n.query('ALTER TABLE products AUTO_INCREMENT = 1')
        connection.query('ALTER TABLE products DROP id')
        connection.query('ALTER TABLE products ADD id INT NOT NULL AUTO_INCREMENT PRIMARY KEY FIRST')
        resolve(result)
      })
    })
  },
  countData: () => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT count(*) as totalData FROM products', (error, result) => {
        resolve(result[0].totalData)
      })
    })
  }
}