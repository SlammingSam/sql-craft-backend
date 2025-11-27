import { DataTypes } from "sequelize";
import sequelize from "../config/sequelizeInstance.js";

const Biome = sequelize.define("Biome", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
});

export default Biome;
