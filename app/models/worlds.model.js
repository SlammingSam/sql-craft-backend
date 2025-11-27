import { DataTypes } from "sequelize";
import sequelize from "../config/sequelizeInstance.js";

const Worlds = sequelize.define("Worlds", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
});

export default Worlds;
