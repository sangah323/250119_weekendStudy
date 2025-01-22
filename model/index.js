const { Sequelize, DataTypes } = require("sequelize");
const config = require("../config");
const db = config.db.development;
const sequelize = new Sequelize(db.database, db.username, db.password, db);

const File = require('./file.model')(sequelize, DataTypes);

module.exports = {
  sequelize,
  File,
};
