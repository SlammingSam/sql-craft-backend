import { DataTypes } from "sequelize";
import sequelize from "../config/sequelizeInstance.js";

const GeneratedStructures = sequelize.define("GeneratedStructures", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: { 
    type: DataTypes.STRING, 
    allowNull: false 
  },
  biome_id: { 
    type: DataTypes.INTEGER, 
    allowNull: false,
    references: { model: "Biomes", key: "id" },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  },
  map: { 
    type: DataTypes.STRING, 
    allowNull: true 
  },
});

export default GeneratedStructures;
