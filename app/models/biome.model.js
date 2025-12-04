import { DataTypes } from "sequelize";
import sequelize from "../config/sequelizeInstance.js";

const Biome = sequelize.define("Biome", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: { 
    type: DataTypes.STRING, 
    allowNull: false 
  },
  dimension: { 
    type: DataTypes.STRING, 
    allowNull: false,
    references: { model: "Dimensions", key: "name" },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  temperature: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  has_precipitation: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  color: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default Biome;
