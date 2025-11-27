import { DataTypes } from "sequelize";
import sequelize from "../config/sequelizeInstance.js";

const Blocks = sequelize.define("Blocks", {
  block_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  stackSize: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 64,
  },
  conductive:{
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
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
