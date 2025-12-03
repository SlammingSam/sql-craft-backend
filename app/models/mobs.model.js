import { DataTypes } from "sequelize";
import sequelize from "../config/sequelizeInstance.js";

const Mobs = sequelize.define("Mobs", {
  mob_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  type: { type: DataTypes.STRING, allowNull: false },
  entity_id: { 
    type: DataTypes.INTEGER, 
    allowNull: false,
    references: { model: "Entities", key: "entity_id" },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  },
  hostile: { type: DataTypes.BOOLEAN, defaultValue: false },
  tamable: { type: DataTypes.BOOLEAN, defaultValue: false },
  breedable: { type: DataTypes.INTEGER, allowNull: true },
});

export default Mobs;
