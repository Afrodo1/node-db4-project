
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').insert([
    {ingredient: 'cup of milk'},
    {ingredient: 'egg'},
    {ingredient: 'cup of sugar'},
    {ingredient: 'cup of chocolate chips'},
    {ingredient: 'cup of tomato sauce'},
    {ingredient: 'cup of pasta'},
    {ingredient: 'cup of flour'},
    {ingredient: 'clove of garlic'},
    {ingredient: 'cup of salt'},
    {ingredient: 'meatball'},
    {ingredient: 'cup of butter'},
    {ingredient: 'cup of cheese'},
    {ingredient: 'cup of water'}
  ]);
};