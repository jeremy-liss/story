
exports.up = function(knex, Promise) {
  return knex.schema.createTable('lines', function (table) {
    table.increments('id').primary()
    table.string('line')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('lines')
};
