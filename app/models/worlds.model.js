import { DataTypes } from "sequelize";
import sequelize from "../config/sequelizeInstance.js";

const Worlds = sequelize.define("Worlds", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  seed: { type: DataTypes.BIGINT, allowNull: true },
  name: { type: DataTypes.STRING, allowNull: false },
  setting_id: { 
    type: DataTypes.INTEGER, 
    allowNull: true,
  },
  weather: { type: DataTypes.ENUM("SUNNY", "RAINY", "STORMY"), allowNull: true },
  spawn_point_x: { type: DataTypes.INTEGER, allowNull: true },
  spawn_point_y: { type: DataTypes.INTEGER, allowNull: true },
  spawn_point_z: { type: DataTypes.INTEGER, allowNull: true },
});

export default Worlds;
