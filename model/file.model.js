const fileModel = (sequelize, DataTypes) => {
  return sequelize.define(
    "file",
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
    { freezeTableName: true }
  );
};

module.exports = fileModel;
