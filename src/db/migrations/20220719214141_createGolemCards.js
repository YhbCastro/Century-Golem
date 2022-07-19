
exports.up = function(knex) {
    return knex.schema.createTable("golemCards", (table) => {
        table.increments("card_id").primary();
        table.text("cost").notNullable();
        table.integer("value").notNullable();
        table.integer("coins").notNullable().defaultTo(0);
    })
  
};


exports.down = function(knex) {
  return knex.schema.dropTable("golemCards");
};
