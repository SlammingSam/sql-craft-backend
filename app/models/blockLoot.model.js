import { DataTypes } from "sequelize";
import sequelize from "../config/sequelizeInstance.js";

const BlockLoot = sequelize.define("BlockLoot", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  item: { 
    type: DataTypes.STRING, 
    allowNull: false 
  },
  dropChance: { 
    type: DataTypes.DECIMAL, 
    allowNull: false 
  },
  stackSizeRange: { 
    type: DataTypes.JSON, 
    allowNull: false 
  },
});

export default BlockLoot;
