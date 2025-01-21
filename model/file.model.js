const fileModel = (sequelize, DataTypes) => {
  return sequelize.define(
    "file",
    {
      fileName: {
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

module.exports = fileModel;
