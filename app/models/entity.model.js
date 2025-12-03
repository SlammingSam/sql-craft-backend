import { DataTypes } from "sequelize";
import sequelize from "../config/sequelizeInstance.js";

const Entity = sequelize.define("Entity", {
  entity_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  type: { type: DataTypes.STRING, allowNull: false },
  health: { type: DataTypes.INTEGER, allowNull: true },
  chunk_id: { 
    type: DataTypes.INTEGER, 
    allowNull: true,
    references: { model: "Chunks", key: "chunk_id" },
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  },
  velocity: { type: DataTypes.FLOAT, allowNull: true },
  direction: { type: DataTypes.FLOAT, allowNull: true },
  effects: { type: DataTypes.BOOLEAN, defaultValue: false },
  inventory: { type: DataTypes.BOOLEAN, defaultValue: false },
  isVillager: { type: DataTypes.BOOLEAN, defaultValue: false },
  location_x: { type: DataTypes.INTEGER, allowNull: true },
  location_y: { type: DataTypes.INTEGER, allowNull: true },
  location_z: { type: DataTypes.INTEGER, allowNull: true },
});

export default Entity;
