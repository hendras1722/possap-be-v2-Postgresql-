const con = require("../configs/mysql");

module.exports = {
    buy: (idBuyer, data, a, date) => {
        return new Promise((resolve, reject) => {
            con.query(
                `SELECT * FROM products WHERE id= ${data.idProduct}`,
                (error, result) => {
                    // @ts-ignore
                    if (error) reject(new Error(error));
                    else {
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
                                // @ts-ignore
                                (error, result) => {
                                    if (error) {
                                        // @ts-ignore
                                        reject(new Error(error));
                                    } else {
                                        con.query(
                                            `INSERT INTO purchase_detail SET ?, price = ${price}, idBuyer = '${idBuyer}'`,
                                            data,
                                            // @ts-ignore
                                            (error, result) => {
                                                // @ts-ignore
                                                if (error) reject(new Error(error))
                                                else {
                                                    con.query(
                                                        `SELECT SUM(price) AS totalPrice FROM purchase_detail WHERE idBuyer='${idBuyer}'`,
                                                        (error, result) => {
                                                            console.log('jalan gak', result[0].totalPrice)
                                                            // @ts-ignore
                                                            if (error) reject(new Error(error))
                                                            else {
                                                                con.query(`UPDATE purchase SET totalPayment = ${parseInt(result[0].totalPrice)} WHERE idBuyer = '${idBuyer}'`, (error, result) => {
                                                                    // @ts-ignore
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
                // @ts-ignore
                if (error) reject(new Error(error))
                resolve(result)
            })
        })
    },

    readOrderDetail: () => {
        return new Promise((resolve, reject) => {
            con.query('SELECT purchase.* FROM purchase', (error, result) => {
                // @ts-ignore
                if (error) reject(new Error(error))
                resolve(result)
            })
        })
    },
    orderDetail: (posId) => {
        return new Promise((resolve, reject) => {
            con.query('SELECT purchase_detail.*, products.name FROM purchase_detail LEFT JOIN products ON purchase_detail.idProduct = products.id WHERE idBuyer = ?', posId, (error, result) => {
                // @ts-ignore
                if (error) reject(new Error(error))
                resolve(result)
            })
        })
    },
    SumPrice: (posId) => {
        return new Promise((resolve, reject) => {
            con.query('SELECT year(purchase.date_added) `year`, SUM(purchase.totalPayment) `Price` from purchase WHERE purchase.date_added group by `year`', posId, (error, result) => {
                // @ts-ignore
                if (error) reject(new Error(error))
                resolve(result)
            })
        })
    },
    SumPriceMonth: () => {
        return new Promise((resolve, reject) => {
            con.query('SELECT month(purchase.date_added) `month`,year(purchase.date_added) `year`, SUM(purchase.totalPayment) `Price` from purchase group by `month`', (error, result) => {
                // @ts-ignore
                if (error) reject(new Error(error))
                resolve(result)
            })
        })
    }
};
