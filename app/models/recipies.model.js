import { DataTypes } from "sequelize";
import sequelize from "../config/sequelizeInstance.js";

const Recipies = sequelize.define("Recipies", {
  recipe_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  output_item_id: { 
    type: DataTypes.INTEGER, 
    allowNull: false,
    references: { model: "Items", key: "item_id" },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  },
  slot1_item_id: { type: DataTypes.INTEGER, allowNull: true },
  slot2_item_id: { type: DataTypes.INTEGER, allowNull: true },
  slot3_item_id: { type: DataTypes.INTEGER, allowNull: true },
  slot4_item_id: { type: DataTypes.INTEGER, allowNull: true },
  slot5_item_id: { type: DataTypes.INTEGER, allowNull: true },
  slot6_item_id: { type: DataTypes.INTEGER, allowNull: true },
  slot7_item_id: { type: DataTypes.INTEGER, allowNull: true },
  slot8_item_id: { type: DataTypes.INTEGER, allowNull: true },
  slot9_item_id: { type: DataTypes.INTEGER, allowNull: true },
});

export default Recipies;
