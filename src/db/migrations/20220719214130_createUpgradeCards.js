
exports.up = function(knex) {
    return knex.schema.createTable("upgradeCards", (table) => {
        table.increments("card_id").primary();
        table.text("quantity").notNullable();
        table.boolean("is_used").notNullable().defaultTo(false);
        table.integer("gems").notNullable().defaultTo(0)
    })
  
};


exports.down = function(knex) {
  return knex.schema.droptable("upgradeCards");
};
