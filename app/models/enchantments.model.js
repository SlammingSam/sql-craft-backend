import { DataTypes } from "sequelize";
import sequelize from "../config/sequelizeInstance.js";

const Enchantments = sequelize.define("Enchantments", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: { 
    type: DataTypes.STRING, 
    allowNull: false 
  },
  maxLevel: { 
    type: DataTypes.INTEGER, 
    allowNull: false, 
    defaultValue: 1 
  },
  minCost: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  maxCost: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  treasureOnly: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  curse: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  exclude: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  weight: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  tradeable: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  discoverable: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
});

export default Enchantments;
