const app = require("./app");
require("dotenv").config();

const { PORT = 3000 } = process.env;

app.listen(PORT, () => {
  console.log(`Server runned successful on port ${PORT}`);
});
