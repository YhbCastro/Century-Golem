
exports.up = function(knex) {
  return knex.schema.createTable("player", (table) => {
    table.increments("player_id").primary();
    table.string("name").notNullable();
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable("player")
};
