import { DataTypes } from "sequelize";
import sequelize from "../config/sequelizeInstance.js";

const Dimentions = sequelize.define("Dimentions", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
});

export default Dimentions;
