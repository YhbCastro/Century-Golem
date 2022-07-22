const router = require("express").Router();
const controller = require("./games.controller");
const methodNotAllowed = require('../errors/methodNotAllowed')

router.route("/create-game")
  .get(controller.list)
  .post(controller.create)
  .all(methodNotAllowed);