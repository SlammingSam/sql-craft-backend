import { DataTypes } from "sequelize";
import sequelize from "../config/sequelizeInstance.js";

const Items = sequelize.define("Items", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
});

export default Items;
