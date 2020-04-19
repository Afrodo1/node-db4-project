const db = require('../data/db-config.js');

function find() {
    return db('recipes');
};

function findById(id) {
    return db('recipes').where({ id });
};

function findIngredients(id){
    return db('recipe-ingredients as ri')
    .join('recipes', 'ri.recipe_id', 'recipes.id')
    .join('ingredients','ri.ingredient_id','ingredients.id')
    .select('ingredient','measurement')
    .where('ri.recipe_id', id);

};


function findInstructions(id){
    return db('recipe-instructions as ri')
    .join('recipes', 'ri.recipe_id', 'recipes.id')
    .join('instructions as i', 'ri.instruction_id','i.id')
    .select('instruction', 'step_number')
    .where('ri.recipe_id', id)
    .orderBy('step_number', 'desc');

};
function findRecipeIngredient(id){
    return db('recipe-ingredients as ri')
    .join('ingredients as i', 'ri.ingredient_id','i.id')
    .join('recipes as r','ri.recipe_id','r.id')
    .select('r.recipe')
    .where({'ri.ingredient_id':id})
}

module.exports = {
    find,
    findById,
    findIngredients,
    findInstructions,
    findRecipeIngredient
}