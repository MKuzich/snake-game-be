const { getPlayers, addPlayer } = require("../services/playersService");

const getPlayersController = async () => {
  const data = await getPlayers();
  return data;
};

const addPlayerController = async (req) => {
  const { body } = req;
  const data = await addPlayer(body);
  return data;
};

module.exports = {
  getPlayersController,
  addPlayerController,
};
