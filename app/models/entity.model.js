import { DataTypes } from "sequelize";
import sequelize from "../config/sequelizeInstance.js";

const Entity = sequelize.define("Entity", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
});

export default Entity;
