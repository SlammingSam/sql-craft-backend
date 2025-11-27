import { DataTypes } from "sequelize";
import sequelize from "../config/sequelizeInstance.js";

const Chunk = sequelize.define("Chunk", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
});

export default Chunk;
