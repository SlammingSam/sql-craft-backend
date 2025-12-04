import { DataTypes } from "sequelize";
import sequelize from "../config/sequelizeInstance.js";

const Recipies = sequelize.define("Recipies", {
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

export default Recipies;
