const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Plant extends Model {}

Plant.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    plant_img: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    upkeep: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    toxicity: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    water: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sun_amount: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    difficulty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
        max: 10,
      },
    },
    problem: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "Plant",
  }
);

module.exports = Plant;

// Problem (optional)
