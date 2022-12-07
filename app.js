const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const playersRouter = require("./routers/playersRouter");
const { handleError } = require("./middlewares/handleError");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/players", playersRouter);
app.use(express.static("public"));

app.use(handleError);

module.exports = app;
