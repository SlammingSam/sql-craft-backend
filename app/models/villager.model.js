import { DataTypes } from "sequelize";
import sequelize from "../config/sequelizeInstance.js";

const Villager = sequelize.define("Villager", {
  villager_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  entity_id: { 
    type: DataTypes.INTEGER, 
    allowNull: false,
    references: { model: "Entities", key: "entity_id" },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  },
  job: { type: DataTypes.STRING, allowNull: true },
  bed_location_x: { type: DataTypes.INTEGER, allowNull: true },
  bed_location_y: { type: DataTypes.INTEGER, allowNull: true },
  bed_location_z: { type: DataTypes.INTEGER, allowNull: true },
  job_site_x: { type: DataTypes.INTEGER, allowNull: true },
  job_site_y: { type: DataTypes.INTEGER, allowNull: true },
  job_site_z: { type: DataTypes.INTEGER, allowNull: true },
  trade_offers: { type: DataTypes.JSON, allowNull: true },
});

export default Villager;
