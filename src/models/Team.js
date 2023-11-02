const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "Team",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      createdBy: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      createdDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      modifiedBy: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      modifiedDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      isDeleted: {
        type: DataTypes.TINYINT(1),
        defaultValue: 0,
      },
    },
    {
      sequelize,
      tableName: "Team",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "id" }],
        },
      ],
    }
  );
};
