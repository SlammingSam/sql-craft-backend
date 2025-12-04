import { DataTypes } from "sequelize";
import sequelize from "../config/sequelizeInstance.js";

const Recipes = sequelize.define("Recipes", {
  recipe_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  inShape: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  ingredients: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  result: { 
    type: DataTypes.JSON, 
    allowNull: false,
  },
});

export default Recipes;
