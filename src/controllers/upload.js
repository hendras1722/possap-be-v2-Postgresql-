const express = require('express')
const multer = require('multer')
// const myConnection = require('../helpers/status')
const { v4 } = require('uuid')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        console.log(file)
        cb(null, v4().substring(0, 8) + "-" + file.originalname.replace(/\s/g, ''))
    }
})
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024
    },
    fileFilter: (req, file, cb) => {
        if (
            !file.mimetype.includes("jpeg") &&
            !file.mimetype.includes("jpg") &&
            // @ts-ignore
            !file.mimetype.includes("png") && limits > 1024 * 1024
        ) {
            // @ts-ignore
            return cb(null, false, new Error("Only images are allowed"));

        }
        cb(null, true);
    }
});

// console.log(upload)
module.exports = upload