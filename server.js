const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static('public'))

server.get('/', function (req, res) {
  return res.render('index')
})

server.set('view engine', 'html')
nunjucks.configure('Views', {
  express: server,
})

server.listen(3000, function () {
  console.log = 'Server is Running'
})
