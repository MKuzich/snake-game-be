const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const playersRouter = require("./routers/playersRouter");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/players", playersRouter);
app.use(express.static("public"));

app.use((_, res) => {
  res.status(404).json({
    status: "error",
    code: 404,
    message: "Use api on another routes, wrong route",
    data: "Not found",
  });
});

app.use((err, _, res) => {
  res.status(500).json({
    status: "fail",
    code: 500,
    message: err.message,
    data: "Internal Server Error",
  });
});

module.exports = app;
