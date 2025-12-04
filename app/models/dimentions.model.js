import { DataTypes } from "sequelize";
import sequelize from "../config/sequelizeInstance.js";

const Dimensions = sequelize.define("Dimensions", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  // world_id: { 
  //   type: DataTypes.INTEGER, 
  //   allowNull: false,
  //   references: { model: "Worlds", key: "id" },
  //   onDelete: "CASCADE",
  //   onUpdate: "CASCADE",
  // },
  name: { 
    type: DataTypes.STRING, 
    unique: true,
    allowNull: false,
  },
});

export default Dimensions;
