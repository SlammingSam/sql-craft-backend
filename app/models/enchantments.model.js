import { DataTypes } from "sequelize";
import sequelize from "../config/sequelizeInstance.js";

const Enchantments = sequelize.define("Enchantments", {
  enchantment_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: { type: DataTypes.STRING, allowNull: false },
  level: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
  item_id: { 
    type: DataTypes.INTEGER, 
    allowNull: true,
    references: { model: "Items", key: "item_id" },
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  },
});

export default Enchantments;
