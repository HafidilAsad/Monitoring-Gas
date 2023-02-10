import {Sequelize} from "sequelize";
import db from "../config/Database.js";
 
const {DataTypes} = Sequelize;

// Define schema
const Striko1 = db.define('monitoring_gas30', {
    // Define attributes
    nama_mesin: {
      type: DataTypes.STRING
    },
    gas_used: {
      type: DataTypes.DOUBLE
    },
    gas_consumption: {
      type: DataTypes.DOUBLE
    }
  },{
    // Freeze Table Name
    freezeTableName: true
  });
 

 
export default Striko1;
 
(async()=>{
    await db.sync();
})();