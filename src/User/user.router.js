const router = require("express").Router();
const controller = require("../user.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");


router.route("/:player_id")
    .get(controller.read)
    .put(controller.update)
    .delete(controller.delete)
    .all(methodNotAllowed);

router.route("/")
    .get(controller.list)
    .post(controller.create)
    .all(methodNotAllowed);

module.exports = router;