const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')

const server = express()

server.use(express.static('public'))
server.use(routes)

server.set('view engine', 'html')
nunjucks.configure('Views', {
  express: server,
})

server.listen(5000, function () {
  console.log = 'Server is Running'
})
