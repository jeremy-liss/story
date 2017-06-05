
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('lines').del()
    .then(function () {
      // Inserts seed entries
      return knex('lines').insert([
        {id: 1, line: 'It was early September.'},
        {id: 2, line: 'Rain was getting in under the floor and then somehow bubbling up through the carpet.'},
        {id: 3, line: 'Susan called it a watery miracle.'}
      ]);
    });
};
