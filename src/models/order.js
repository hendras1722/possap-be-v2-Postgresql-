const con = require("../configs/mysql");

module.exports = {
    buy: (idBuyer, data, a, date) => {
        return new Promise((resolve, reject) => {
            con.query(
                `SELECT * FROM products WHERE id= ${data.idProduct}`,
                (error, result) => {
                    if (error) reject(new Error(error));
                    else {
                        console.log(result)
                        var stock = result[0].stock - data.stock;
                        var price = result[0].price * data.stock;
                        if (stock <= 0) {
                            resolve('error')
                        } else {
                            if (a === 0) {
                                con.query(
                                    `INSERT INTO purchase SET ?, idBuyer='${idBuyer}', totalPayment=0`,
                                    date
                                );
                            }
                            con.query(
                                `UPDATE products SET stock = ${stock} WHERE id=${data.idProduct}`,
                                (error, result) => {
                                    if (error) {
                                        reject(new Error(error));
                                    } else {
                                        con.query(
                                            `INSERT INTO purchase_detail SET ?, price = ${price}, idBuyer = '${idBuyer}'`,
                                            data,
                                            (error, result) => {
                                                if (error) reject(new Error(error))
                                                else {
                                                    con.query(
                                                        `SELECT SUM(price) AS totalPrice FROM purchase_detail WHERE idBuyer='${idBuyer}'`,
                                                        (error, result) => {
                                                            console.log('jalan gak', result[0].totalPrice)
                                                            if (error) reject(new Error(error))
                                                            else {
                                                                con.query(`UPDATE purchase SET totalPayment = ${parseInt(result[0].totalPrice)} WHERE idBuyer = '${idBuyer}'`, (error, result) => {
                                                                    if (error) reject(new Error(error))
                                                                    resolve(result)
                                                                })
                                                            }
                                                        })
                                                }
                                            }
                                        );
                                    }
                                }
                            );
                        }
                    }
                }
            );
        });
    },
    readOrder: () => {
        return new Promise((resolve, reject) => {
            con.query('SELECT purchase_detail.*, products.name FROM purchase_detail LEFT JOIN products ON purchase_detail.idProduct = products.id', (error, result) => {
                if (error) reject(new Error(error))
                resolve(result)
            })
        })
    },

    readOrderDetail: () => {
        return new Promise((resolve, reject) => {
            con.query('SELECT	purchase.* FROM purchase', (error, result) => {
                if (error) reject(new Error(error))
                resolve(result)
            })
        })
    },
    orderDetail: (posId) => {
        return new Promise((resolve, reject) => {
            con.query('SELECT purchase_detail.*, products.name FROM purchase_detail LEFT JOIN products ON purchase_detail.idProduct = products.id WHERE idBuyer = ?', posId, (error, result) => {
                if (error) reject(new Error(error))
                resolve(result)
            })
        })
    }
};
