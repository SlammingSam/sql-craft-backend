import { DataTypes } from "sequelize";
import sequelize from "../config/sequelizeInstance.js";

const GeneratedStructures = sequelize.define("GeneratedStructures", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
});

export default GeneratedStructures;
