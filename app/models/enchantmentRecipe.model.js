import { DataTypes } from "sequelize";
import sequelize from "../config/sequelizeInstance.js";

const EnchantmentRecipe = sequelize.define("EnchantmentRecipe", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
});

export default EnchantmentRecipe;
