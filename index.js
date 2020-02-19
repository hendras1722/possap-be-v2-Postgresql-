const express = require('express')
const app = express()
const logger = require('morgan')
const bodyParser = require('body-parser')
const mainNavigation = require('./src/routes')
const multer = require('multer')
const path = require('path')
const { port } = require('./src/configs')
const cors = require('cors')

// var corsOptions = {
//     origin: 'http://192.168.1.16/',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }

// app.get('/pos/search/', cors(corsOptions), function (req, res, next) {
//     res.json({ msg: 'This is CORS-enabled for only example.com' })
// })

app.listen(port, () => console.log(`\n This server is running ${port}`))

app.listen(80, function () {
    console.log('CORS-enabled web server listening on port 80')
})

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use('/', mainNavigation)