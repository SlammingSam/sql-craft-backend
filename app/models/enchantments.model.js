import { DataTypes } from "sequelize";
import sequelize from "../config/sequelizeInstance.js";

const Enchantments = sequelize.define("Enchantments", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
});

export default Enchantments;
