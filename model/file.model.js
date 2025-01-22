module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "image",
    {
      filename: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      path: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { freezeTableName: false }
  );
};