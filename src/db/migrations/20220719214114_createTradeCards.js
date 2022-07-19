
exports.up = function(knex) {
    return knex.schema.createTable("tradeCards", (table) => {
        table.increments("card_id").primary();
        table.string("take_gems").notNullable();
        table.string("give_gems").notNullable();
        table.boolean("is_used").notNullable().defaultTo(false);
        table.integer("gems").notNullable().defaultTo(0)
    })
  
};


exports.down = function(knex) {
  return knex.schema.dropTable("tradeCards");
};
