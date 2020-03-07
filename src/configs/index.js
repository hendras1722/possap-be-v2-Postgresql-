require('dotenv/config');

module.exports = {
    database: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    },
    port: process.env.PORT,
    JWT_KEY: process.env.JWT_SecretKey
}

//sebua data library digunakan untuk mmebuat user interface
// Dom croos platform yang mempergunakan html ke dalam konstruktur
// react virtual dom   elemen componen componen harus 2 tahap 1. reflow dan 2.repaint 
