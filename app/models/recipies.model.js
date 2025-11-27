import { DataTypes } from "sequelize";
import sequelize from "../config/sequelizeInstance.js";

const Recipies = sequelize.define("Recipies", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
});

export default Recipies;
