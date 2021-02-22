const express = require("express");
const cors = require("cors");
const { config } = require("./config");

const app = express();

const catsRouter = require("./cats/routes");

app.use(cors());
app.use("/cats", catsRouter);

app.listen(config.port, () => {
  console.log(`Cat app listening at http://${config.host}:${config.port}`);
});

module.exports = app;
