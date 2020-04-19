
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').insert([
    {instruction: 'mix flour, egg, and milk'},
    {instruction: 'add chocolate chips'},
    {instruction: 'bake for 20-30 mins'},
    {instruction: 'boil water'},
    {instruction: 'add salt'},
    {instruction: 'add pasta'},
    {instruction: 'add water to pot'},
    {instruction: 'add garlic'},
    {instruction: 'add meatballs'},
    {instruction: 'let simmer for 15 mins'},
    {instruction: 'add butter'},
    {instruction: 'add tomato sauce'},
    {instruction: 'add sugar'},
    {instruction: 'add cheese'}
    

  ]);
};


// exports.seed = function(knex, Promise) {
//   return knex('recipe_ingredients').insert([
//     {recipe_id: 1, ingredient_id: 1, measurment: 1.2 }
//   ]);
// };