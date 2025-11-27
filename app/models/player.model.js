import { DataTypes } from "sequelize";
import sequelize from "../config/sequelizeInstance.js";

const Player = sequelize.define("Player", {
  player_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
});

export default Player;
