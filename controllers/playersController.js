const { getPlayers, addPlayer } = require("../services/playersService");

const getPlayersController = async (_, res) => {
  const data = await getPlayers();
  res.json({
    status: "success",
    code: 200,
    data: {
      players: data,
    },
  });
};

const addPlayerController = async (req, res) => {
  const { body } = req;
  const data = await addPlayer(body);
  res.json({
    status: "success",
    code: 200,
    data: {
      player: data,
    },
  });
};

module.exports = {
  getPlayersController,
  addPlayerController,
};
