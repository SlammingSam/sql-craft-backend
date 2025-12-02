import { DataTypes } from "sequelize";
import sequelize from "../config/sequelizeInstance.js";

const Achievements = sequelize.define("Achievements", {
  achievement_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: true },
  player_id: { 
    type: DataTypes.INTEGER, 
    allowNull: true,
    references: { model: "Players", key: "player_id" },
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  },
  completed: { type: DataTypes.BOOLEAN, defaultValue: false },
});

export default Achievements;
