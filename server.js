const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static('public'))

server.set('view engine', 'html')
nunjucks.configure('Views', {
  express: server,
})

server.get('/', function (req, res) {
  return res.render('index')
})

server.listen(3000, function () {
  console.log = 'Server is Running'
})
