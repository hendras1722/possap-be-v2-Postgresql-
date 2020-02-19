const express = require('express')
const Route = express.Router()
const multer = require('multer')
const corsOptions = require('../configs')
const cors = require('cors')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

const upload = multer({
  storage: storage,
  fileSize: 1024 * 1024,
  fileFilter: (req, file, cb) => {
    if (
      !file.mimetype.includes("jpeg") &&
      !file.mimetype.includes("jpg") &&
      !file.mimetype.includes("png")
    ) {
      return cb(null, false, new Error("Only images are allowed"));
    }
    cb(null, true);
  }
});

const {
  posAll,
  posDetail,
  insertData,
  updateData,
  deleteData,

} = require('../controllers/pos')

const {
  authentication,
  authorization
} = require('../helpers/auth')

Route
  .get('/search', authentication, authorization, posAll)
  .get('/search/:posId', posDetail)
  .post('/uploads/', upload.single('image'), insertData)
  .patch('/update/:posId', updateData)
  .delete('/remove/:posId', deleteData)

module.exports = Route