import { DataTypes } from "sequelize";
import sequelize from "../config/sequelizeInstance.js";

const Inventory = sequelize.define("Inventory", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  // player_id: {
  //   type: DataTypes.INTEGER,
  //   allowNull: true,
  //   references: {
  //     model: "Players",
  //     key: "id",
  //   },
  //   onDelete: "SET NULL",
  //   onUpdate: "CASCADE",
  // },
  // inv_item_id: {
  //   type: DataTypes.INTEGER,
  //   allowNull: true,
  //   references: {
  //     model: "Items",
  //     key: "id",
  //   },
  //   onDelete: "SET NULL",
  //   onUpdate: "CASCADE",
  // },
  // block_id: {
  //   type: DataTypes.INTEGER,
  //   allowNull: true,
  //   references: {
  //     model: "Blocks",
  //     key: "id",
  //   },
  //   onDelete: "SET NULL",
  //   onUpdate: "CASCADE",
  // },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
  item_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

export default Inventory;
