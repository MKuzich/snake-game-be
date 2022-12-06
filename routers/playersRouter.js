const express = require("express");
const {
  getPlayersController,
  addPlayerController,
} = require("../controllers/playersController");
const { validateRequest } = require("../middlewares/validateRequest");
const { schemaCreate } = require("../schemas/playerSchema");
const ctrlWrapper = require("../helpers/ctrlWrapper");

const router = express.Router();

router.get("/", ctrlWrapper(getPlayersController));

router.post(
  "/",
  validateRequest(schemaCreate),
  ctrlWrapper(addPlayerController)
);

module.exports = router;
