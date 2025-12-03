import { DataTypes } from "sequelize";
import sequelize from "../config/sequelizeInstance.js";

const WorldSettings = sequelize.define("WorldSettings", {
  setting_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  setting: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: true },
  modes: { type: DataTypes.STRING, allowNull: true },
});

export default WorldSettings;
