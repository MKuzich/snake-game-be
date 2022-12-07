const db = require("../db");

const getPlayers = async () => {
  console.log("Before get");
  const { rows } = await db.query(
    "SELECT * FROM players ORDER BY score DESC LIMIT 8"
  );
  console.log("Error ------->>>>", rows);
  return rows;
};

const addPlayer = async ({ nickname, score }) => {
  const { rows } = await db.query(
    "INSERT INTO players (nickname, score) values ($1, $2) RETURNING *",
    [nickname, score]
  );
  return rows[0];
};

module.exports = {
  getPlayers,
  addPlayer,
};
