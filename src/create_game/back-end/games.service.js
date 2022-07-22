const knex = require('../db/connection');
const tableName = 'game'

function create(game) {
    return knex(tableName)
      .insert(game)
      .returning("*")
      .then((res) => res[0]);
}

function list() {
    return knex(tableName)
      .select("*");
}