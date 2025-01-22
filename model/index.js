const { Sequelize, DataTypes } = require("sequelize");
const config = require("../config");
const fileModel = require("./file.model");
const db = config.db.development;
const sequelize = new Sequelize(db.database, db.username, db.password, db);

const file = fileModel(sequelize, DataTypes);

module.exports = {
  sequelize,
  file,
};
