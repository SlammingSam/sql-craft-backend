import { DataTypes } from "sequelize";
import sequelize from "../config/sequelizeInstance.js";

const Achievements = sequelize.define("Achievements", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
});

export default Achievements;
