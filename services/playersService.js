const db = require("../db");

const getPlayers = async () => {
  players = await db.query("SELECT * FROM players ORDER BY score DESC LIMIT 8");
  return players.rows;
};

const addPlayer = async ({ nickname, score }) => {
  players = await db.query(
    "INSERT INTO players (nickname, score) values ($1, $2) RETURNING *",
    [nickname, score]
  );
  return players.rows[0];
};

module.exports = {
  getPlayers,
  addPlayer,
};
