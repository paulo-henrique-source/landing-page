const express = require('express')
const routes = express.Router()
const products = require('./public/Api/main')

routes.get('/', function (req, res) {
  return res.render('index', { items: products })
})

module.exports = routes
