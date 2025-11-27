import { DataTypes } from "sequelize";
import sequelize from "../config/sequelizeInstance.js";

const Mobs = sequelize.define("Mobs", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
});

export default Mobs;
