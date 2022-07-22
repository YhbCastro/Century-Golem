
exports.up = function(knex) {
  return knex.schema.createTable("playerToGame", (table) => {
    table
        .foreign("player_id")
        .references("player_id")
        .inTable("player")
        .onDelete("cascade")
    table
        .foreign("game_id")
        .references("game_id")
        .inTable("game")
        .onDelete("cascade")
  })
};


exports.down = function(knex) {
    return knex.schema.dropTable("playerToGame")
};
