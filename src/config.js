require("dotenv").config();

exports.config = {
  host: process.env.HOST,
  port: process.env.PORT,
  catHost: process.env.CAT_HOST,
};
