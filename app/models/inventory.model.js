import { DataTypes } from "sequelize";
import sequelize from "../config/sequelizeInstance.js";

const Inventory = sequelize.define("Inventory", {
  inventory_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  player_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Players', // table name (or pass the model object)
      key: 'player_id',        // <- most likely correct PK column
    },
  },
  inv_item_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'Items',
      key: 'item_id',        // <- changed to 'id'
    },
  },
  block_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'Blocks',
      key: 'block_id',        // <- changed to 'id'
    },
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
});

export default Inventory;
