import { DataTypes } from "sequelize";
import sequelize from "../config/sequelizeInstance.js";

const Player = sequelize.define("Player", {
  player_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  uuid: {
    type: DataTypes.CHAR(36),
    allowNull: false,
    unique: true,
  },
  health: {
    type: DataTypes.INTEGER,
    defaultValue: 20,
  },
  hunger: {
    type: DataTypes.INTEGER,
    defaultValue: 20,
  },
  experience: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  effect: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  spawn_point_x: { type: DataTypes.INTEGER, allowNull: true },
  spawn_point_y: { type: DataTypes.INTEGER, allowNull: true },
  spawn_point_z: { type: DataTypes.INTEGER, allowNull: true },
  location_x: { type: DataTypes.INTEGER, allowNull: true },
  location_y: { type: DataTypes.INTEGER, allowNull: true },
  location_z: { type: DataTypes.INTEGER, allowNull: true },
  current_chunk_id: { type: DataTypes.INTEGER, allowNull: true },
});
// Add FK reference for Player.current_chunk_id -> Chunks.chunk_id
Player.rawAttributes.current_chunk_id.references = { model: "Chunks", key: "chunk_id" };
Player.rawAttributes.current_chunk_id.onDelete = "SET NULL";
Player.rawAttributes.current_chunk_id.onUpdate = "CASCADE";
Player.refreshAttributes();

export default Player;
