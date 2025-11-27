import { DataTypes } from "sequelize";
import sequelize from "../config/sequelizeInstance.js";

const WorldSettings = sequelize.define("WorldSettings", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
});

export default WorldSettings;
