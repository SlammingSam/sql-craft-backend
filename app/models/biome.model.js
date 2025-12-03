import { DataTypes } from "sequelize";
import sequelize from "../config/sequelizeInstance.js";

const Biome = sequelize.define("Biome", {
  biome_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: { type: DataTypes.STRING, allowNull: false },
  dimension_id: { 
    type: DataTypes.INTEGER, 
    allowNull: false,
    references: { model: "Dimentions", key: "dimension_id" },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  },
});

export default Biome;
