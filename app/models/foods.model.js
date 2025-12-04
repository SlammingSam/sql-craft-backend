import { DataTypes } from "sequelize";
import sequelize from "../config/sequelizeInstance.js";

const Foods = sequelize.define("Foods", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: { 
    type: DataTypes.STRING, 
    allowNull: false 
  },
  stackSize: { 
    type: DataTypes.INTEGER, 
    allowNull: false 
  },
  foodPoints: { 
    type: DataTypes.DECIMAL, 
    allowNull: false 
  },
  saturation: { 
    type: DataTypes.DECIMAL, 
    allowNull: false 
  },
  effectiveQuality: { 
    type: DataTypes.DECIMAL, 
    allowNull: false 
  },
  saturationRation: { 
    type: DataTypes.DECIMAL, 
    allowNull: false 
  },
});

export default Foods;
