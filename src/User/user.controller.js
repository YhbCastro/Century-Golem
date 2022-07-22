const knex = require("../db/connection");
const userService = require("./user.service")

const VALID_PROPERTIES = [
    name,
]

function list(req, res, next) {
    userService
        .list()
        .then((data) => res.json({ data }))
        .catch(next)
}
function hasOnlyValidProperties(req, res, next) {
    const { data = {} } = req.body;

    const invalidFields = Object.keys(data).filter(
        (field) => !VALID_PROPERTIES.includes(field)
    )

    if (invalidFields.length) {
        return next({
            status: 400,
            message: `Invalid field: ${invalidFields.join(",")}`,
        })
    }
    next();
}

function playerExists(req,res, next) {
    userService
        .read(req.params.playerId)
        .then((player) => {
            if (player) {
                res.locals.player = player;
                return next()
            }
            next({ status: 404, message: `Player cannot be found.`})
        })
        .catch(next)
}

function read(req, res) {
    const { player: data } = res.locals;
    res.json({ data }) 
}

function create(req, res, next) {
    userService
        .create(req.body.data)
        .then((data) => res.status(201).json({ data }))
        .catch(next)
}

function update(req, res, next) {
    const updatedPlayer = {
        ...req.body.data,
        player_id: res.locals.player.player_id,
    };
    userService
        .update(updatedPlayer)
        .then((data) => res.json({ data }))
        .catch(next)
}

function destroy(req, res, next) {
    playerService
        .delete(res.locals.player.player_id)
        .the(() => res.sendStatus(204))
        .catch(next)
}

module.exports = {
    read: [read],
    list,
    create: [hasOnlyValidProperties, create],
    update: [hasOnlyValidProperties, update],
    delete: [playerExists, destroy],

}