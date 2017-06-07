var supertest = require('supertest')
var test = require('tape')

var app = require('../server/server')

test('add a line', function (t) {
  supertest(app)
    .post('/v1/lines')
    .send({line: 'hi'})
    .end(function(err, res) {
        var response = (res.body.length)
        var expected = 4
        t.equal(response, expected)
        t.end()
    })
})

test('close database connection', (t) => {
  app.get('knex').destroy()
  t.end()
})
