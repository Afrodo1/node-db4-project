
exports.seed = function(knex) {
  return knex('recipe-instructions').insert([
    {recipe_id: 2, instruction_id: 1, step_number: 1},
    {recipe_id: 3, instruction_id: 5, step_number: 3},
    {recipe_id: 3, instruction_id: 7, step_number: 5},
    {recipe_id: 2, instruction_id: 2, step_number: 4},
    {recipe_id: 1, instruction_id: 9, step_number: 1},
    {recipe_id: 1, instruction_id: 13, step_number: 3},
    {recipe_id: 3, instruction_id: 3, step_number: 2},
    {recipe_id: 3, instruction_id: 8, step_number: 1},
    {recipe_id: 2, instruction_id: 10, step_number: 5},
    {recipe_id: 2, instruction_id: 6, step_number: 6},
    {recipe_id: 1, instruction_id: 4, step_number: 7},
    {recipe_id: 3, instruction_id: 11, step_number: 1},
    {recipe_id: 1, instruction_id: 12, step_number: 1}
  ]);
};
