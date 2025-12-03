import { DataTypes } from "sequelize";
import sequelize from "../config/sequelizeInstance.js";

const EnchantmentRecipe = sequelize.define("EnchantmentRecipe", {
  enchantment_recipe_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  enchantment_id: { 
    type: DataTypes.INTEGER, 
    allowNull: false,
    references: { model: "Enchantments", key: "enchantment_id" },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  },
  item_id: { 
    type: DataTypes.INTEGER, 
    allowNull: false,
    references: { model: "Items", key: "item_id" },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  },
  lapisRequired: { type: DataTypes.ENUM("1", "2", "3"), allowNull: false },
  name: { type: DataTypes.STRING, allowNull: true },
  description: { type: DataTypes.STRING, allowNull: true },
});

export default EnchantmentRecipe;
