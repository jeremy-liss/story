var env = process.env['NODE_ENV'] || 'development'
var config = require('../knexfile.js')[env]
var knex = require('knex')(config)

module.exports = {
  getLines: getLines,
  addLine: addLine,
  delLine: delLine,
  knex: knex
}

function getLines () {
  return knex('lines').select()
}

function addLine (line) {
  return knex('lines')
    .insert({line:line})
    .then(function(){
      return knex('lines')
      .select()
    })
}

function delLine (id) {
  return knex('lines')
    .where('id', id)
    .del()
    .then(function(){
      return knex('lines')
      .select()
    })
}
