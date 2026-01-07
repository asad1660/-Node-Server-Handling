const Sequelize = require("sequelize");
require("dotenv").config();

const password = process.env.DATA_BASE_PASSWORD;
const sequelize = new Sequelize("node-complete", "root", password, {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
