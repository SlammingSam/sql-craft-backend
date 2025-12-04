import { DataTypes } from "sequelize";
import sequelize from "../config/sequelizeInstance.js";

const Materials = sequelize.define("Materials", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  mateial: { 
    type: DataTypes.STRING, 
    allowNull: true,
  },
});

export default Materials;
