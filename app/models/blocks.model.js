import { DataTypes } from "sequelize";
import sequelize from "../config/sequelizeInstance.js";

const Blocks = sequelize.define("Blocks", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
});

export default Blocks;
