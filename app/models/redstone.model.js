import { DataTypes } from "sequelize";
import sequelize from "../config/sequelizeInstance.js";

const Redstone = sequelize.define("Redstone", {
  redstone_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  item_id: { 
    type: DataTypes.INTEGER, 
    allowNull: true,
    references: { model: "Items", key: "item_id" },
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  },
  power: { type: DataTypes.INTEGER, allowNull: true },
  powered_effect: { type: DataTypes.STRING, allowNull: true },
});

export default Redstone;
