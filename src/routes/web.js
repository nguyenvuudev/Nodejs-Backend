const express = require('express')
const router = express.Router()
const { getHomePage } = require('../controllers/homeController')

// 

router.get('/', getHomePage)

router.get('/abc', (req, res) => {
  res.render('sample')
})

module.exports = router