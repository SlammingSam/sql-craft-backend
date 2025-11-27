import { DataTypes } from "sequelize";
import sequelize from "../config/sequelizeInstance.js";

const Effects = sequelize.define("Effects", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
});

export default Effects;
