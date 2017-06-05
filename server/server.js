var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var path = require('path')

var lines = require('./route')

var server = express()
var db = require('./db')
server.set('knex', db.knex)

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({
  extended: true
}))
server.use(cors({origin: '*'}))
server.use(express.static(path.join(__dirname, '../public')))

server.use('/v1/lines', lines)

module.exports = server
