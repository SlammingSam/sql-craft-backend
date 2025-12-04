import { DataTypes } from "sequelize";
import sequelize from "../config/sequelizeInstance.js";

const Effects = sequelize.define("Effects", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: { 
    type: DataTypes.STRING, 
    allowNull: false 
  },
  type: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  // player_id: { 
  //   type: DataTypes.INTEGER, 
  //   allowNull: true,
  //   references: { model: "Players", key: "player_id" },
  //   onDelete: "SET NULL",
  //   onUpdate: "CASCADE",
  // },
  // item_id: { 
  //   type: DataTypes.INTEGER, 
  //   allowNull: true,
  //   references: { model: "Items", key: "item_id" },
  //   onDelete: "SET NULL",
  //   onUpdate: "CASCADE",
  // },
  // entity_id: { 
  //   type: DataTypes.INTEGER, 
  //   allowNull: true,
  //   references: { model: "Entities", key: "entity_id" },
  //   onDelete: "SET NULL",
  //   onUpdate: "CASCADE",
  // },
  // duration: { type: DataTypes.INTEGER, allowNull: true },
});

export default Effects;
