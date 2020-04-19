
exports.up = function(knex) {
  return(
      knex.schema
        .createTable('recipes', tbl => {
            tbl.increments();
            tbl.string('recipe',128).notNullable().unique();
        })
        .createTable('ingredients', tbl=>{
            tbl.increments();
            tbl.varchar('ingredient', 128).notNullable().unique();                       
        })
        .createTable('instructions', tbl =>{
            tbl.increments();
            tbl.string('instruction').notNullable();            
        })
        .createTable('recipe-ingredients', tbl =>{
            tbl.increments();
            tbl.integer('recipe_id')
               .unsigned()
               .notNullable()
               .references('id')
               .inTable('recipes')
               .onDelete('CASCADE')
               .onUpdate('CASCADE');
            tbl.integer('ingredient_id')
               .unsigned()
               .notNullable()               
               .references('id')
               .inTable('ingredients')
               .onDelete('CASCADE')
               .onUpdate('CASCADE');
            tbl.float('measurement').notNullable();
        })
        .createTable('recipe-instructions', tbl =>{
            tbl.increments();
            tbl.integer('recipe_id')
               .unsigned()
               .notNullable()               
               .references('id')
               .inTable('recipes')
               .onDelete('CASCADE')
               .onUpdate('CASCADE')
            tbl.integer('instruction_id')
               .unsigned()
               .notNullable()               
               .references('id')
               .inTable('instructions')
               .onDelete('CASCADE')
               .onUpdate('CASCADE');
            tbl.integer('step_number').notNullable();
        })
  )

};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('recipe-instructions') 
        .dropTableIfExists('recipe_instructions')
        .dropTableIfExists('recipe-ingredients') 
        .dropTableIfExists('recipe_ingredients')
        .dropTableIfExists('instructions') 
        .dropTableIfExists('ingredients') 
        .dropTableIfExists('recipes')
    

};
