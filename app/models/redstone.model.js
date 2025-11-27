import { DataTypes } from "sequelize";
import sequelize from "../config/sequelizeInstance.js";

const Redstone = sequelize.define("Redstone", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
});

export default Redstone;
