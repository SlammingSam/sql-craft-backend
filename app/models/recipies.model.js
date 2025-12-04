import { DataTypes } from "sequelize";
import sequelize from "../config/sequelizeInstance.js";

const Recipes = sequelize.define("Recipes", {
  recipe_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  inShape: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ingredients: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  result: { 
    type: DataTypes.STRING, 
    allowNull: false,
  },
});

export default Recipes;
