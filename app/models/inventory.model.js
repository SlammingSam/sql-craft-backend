import { DataTypes } from "sequelize";
import sequelize from "../config/sequelizeInstance.js";

const Inventory = sequelize.define("Inventory", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
});

export default Inventory;
