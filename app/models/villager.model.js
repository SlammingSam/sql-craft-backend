import { DataTypes } from "sequelize";
import sequelize from "../config/sequelizeInstance.js";

const Villager = sequelize.define("Villager", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
});

export default Villager;
