const knex = require("../db/connection");

function list() {
    return knex("player").select("*")
}

function create(player) {
    return knex("player")
        .insert(player)
        .returning("*")
        .then((createRecords) => createRecords[0])
}

function read(player_id) {
    return knex("player").select("*").where({ player_id }).fist()
}

function update(updatedPlayer) {
    return knex("player")
        .select("*")
        .where({ player_id: updatedPlayer.player_id })
        .update(updatedPlayer, "*")
}

function destroy(player_id) {
    return knex("player").whre({ player_id }).del(); 
}
module.exports = {
    list,
    create,
    read,
    update,
    delete: destroy,
}