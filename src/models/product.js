const connection = require('../configs/pg')

module.exports = {
  posAll: (limit, activePage, searchName, sortBy, orderBy, name_category, idCat, posId, urutkan) => {
    const firstData = ((limit * activePage) - limit)
    let getData = new Promise(async (resolve, reject) => {
      try {
        if (urutkan) {
          const result = await connection.query(`SELECT products.*, category.name_category FROM products LEFT JOIN category ON products.id_category = category.id WHERE category.name_category LIKE '${urutkan}' ORDER BY ${sortBy} ${orderBy}`)
          resolve(result.rows)
        }
        if (limit) {
          const result = await connection.query(`SELECT products.*, category.name_category FROM products LEFT JOIN category ON products.id_category = category.id ORDER BY ${sortBy || 'id'} ${orderBy || 'ASC'}  LIMIT ${limit}  OFFSET ${firstData}`)
          resolve(result.rows)
        }
        const result = await connection.query(`SELECT products.*, category.name_category FROM products LEFT JOIN category ON products.id_category = category.id AND products.name LIKE '%${searchName}%' AND CAST(products.id_category AS text) LIKE '%${idCat}%'
        ORDER BY ${sortBy || 'id'} ${orderBy || 'ASC'}`)
        resolve(result.rows)
      } catch (error) {
        reject(error)
      }
    })
    return getData
  },
  posDetail: (posId) => {
    let getDetail = new Promise(async (resolve, reject) => {
      try {
        const result = await connection.query(`SELECT * FROM products WHERE id = '${posId}'`)
        resolve(result.rows[0])
      } catch (error) {
        reject(error)
      }
    })
    return getDetail
  },
  insertData: (data) => {
    let insertData = new Promise(async (resolve, reject) => {
      try {
        const getData = await connection.query(`INSERT INTO products( id, name, description, image, price, stock, id_category, created_at, updated_at) VALUES ('${data.id}', '${data.name}', '${data.description}', '${data.image}', ${data.price}, ${data.stock}, ${data.id_category}, '${data.created_at}', '${data.updated_at}');`)
        if (getData.rowCount > 0) {
          const result = await connection.query(`SELECT products.*, category.name_category FROM products  LEFT JOIN category ON products.id_category = category.id`)
          resolve(result.rows)
        }
      } catch (error) {
        reject(error)
      }
    })
    return insertData
  },
  updateData: (data) => {
    const posId = data.id
    let updateData = new Promise(async (resolve, reject) => {
      try {
        const result = await connection.query(`UPDATE products SET id='${data.id}', name='${data.name}', description='${data.description}', image='${data.image}', price=${data.price}, stock=${data.stock}, id_category=${data.id_category}, updated_at='${data.updated_at}' WHERE id = '${posId}'`)
        resolve(result)
      } catch (error) {
        reject(error)
      }
    })
    return updateData
  },
  deleteData: (posId) => {
    let deleteData = new Promise((resolve, reject) => {
      connection.query('DELETE FROM products WHERE id = ?', posId)
      connection.query('SELECT products.*, category.name_category FROM products LEFT JOIN category ON products.id_category = category.id', (error, result) => {
        // @ts-ignore
        if (error) reject(new Error(error))
        // connectio?n.query('ALTER TABLE products AUTO_INCREMENT = 1')
        connection.query('ALTER TABLE products DROP id')
        connection.query('ALTER TABLE products ADD id INT NOT NULL AUTO_INCREMENT PRIMARY KEY FIRST')
        resolve(result)
      })
    })
    return deleteData
  },
  countData: () => {
    let countData = new Promise((resolve, reject) => {
      connection.query(`SELECT count(products.id) as totalData FROM products`, (error, result) => {
        // @ts-ignore
        if (error) reject(new Error(error))
        resolve(result.rows[0].totaldata)
      })
    })
    return countData
  }
}
