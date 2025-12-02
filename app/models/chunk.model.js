import { DataTypes } from "sequelize";
import sequelize from "../config/sequelizeInstance.js";

const Chunk = sequelize.define("Chunk", {
  chunk_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  dimension_id: { 
    type: DataTypes.INTEGER, 
    allowNull: false,
    references: { model: "Dimentions", key: "dimension_id" },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  },
  blocks: { type: DataTypes.JSON, allowNull: true },
  x: { type: DataTypes.INTEGER, allowNull: false },
  y: { type: DataTypes.INTEGER, allowNull: false },
  z: { type: DataTypes.INTEGER, allowNull: false },
});

export default Chunk;
