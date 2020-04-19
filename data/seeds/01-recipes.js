
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').insert([
    {recipe: 'spaghetti'},
    {recipe: 'cookies'},
    {recipe: 'cake'}
  ]);
};
