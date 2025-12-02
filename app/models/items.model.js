import { DataTypes } from "sequelize";
import sequelize from "../config/sequelizeInstance.js";

const Items = sequelize.define("Items", {
  item_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  state: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  stackSize: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 64,
  },
  enchantment: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  chunk_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: "Chunks",
      key: "chunk_id",
    },
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  },
});

export default Items;
