const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dogs', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      allowNull: false,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    min_weight: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    max_weight: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    min_height: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    max_height: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    life_span: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    createInDB: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  });
};
