import { DataTypes } from "sequelize";
import sequelize from "../config/sequelizeInstance.js";

const Dimentions = sequelize.define("Dimentions", {
  dimension_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  world_id: { 
    type: DataTypes.INTEGER, 
    allowNull: false,
    references: { model: "Worlds", key: "world_id" },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  },
  name: { type: DataTypes.STRING, allowNull: false },
});

export default Dimentions;
