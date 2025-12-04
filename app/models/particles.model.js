import { DataTypes } from "sequelize";
import sequelize from "../config/sequelizeInstance.js";

const Particles = sequelize.define("Particles", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: { 
    type: DataTypes.STRING, 
    allowNull: false,
  },
});

export default Particles;
