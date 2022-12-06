const Pool = require("pg").Pool;
const pool = new Pool({
  user: "me",
  host: "localhost",
  database: "api",
  password: "password",
  port: 5432,
});

const getPlayers = async () => {
  pool.query("SELECT * FROM players", (error, results) => {
    if (error) {
      throw error;
    }
    return results;
  });
};

const addPlayer = async ({ nickname, score }) => {
  pool.query(
    "INSERT INTO players new player (nickname, score)",
    [nickname, score],
    (error, results) => {
      if (error) {
        throw error;
      }
      return results;
    }
  );
};

module.exports = {
  getPlayers,
  addPlayer,
};
