import { DataTypes } from "sequelize";
import sequelize from "../config/sequelizeInstance.js";

const Blocks = sequelize.define("Blocks", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  hardness: {
    type: DataTypes.DECIMAL,
    allowNull: true,
  },
  resistance: {
    type: DataTypes.DECIMAL,
    allowNull: true,
  },
  stackSize: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 64,
  },
  diggable: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  transparent: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  emitLight: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  conductive:{
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
  falls: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  powered: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

export default Blocks;
