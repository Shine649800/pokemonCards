'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pokemon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pokemon.init({
    title: DataTypes.STRING,
    name: DataTypes.STRING,
    hp: DataTypes.INTEGER,
    type: DataTypes.STRING,
    pokepic: DataTypes.STRING,
    orb: DataTypes.STRING,
    orb2: DataTypes.STRING,
    orb3: DataTypes.STRING,
    powerName: DataTypes.STRING,
    powerDmg: DataTypes.INTEGER,
    orb4: DataTypes.STRING,
    orb5: DataTypes.STRING,
    orb6: DataTypes.STRING,
    powerName2: DataTypes.STRING,
    powerDmg2: DataTypes.INTEGER,
    weakness: DataTypes.STRING,
    resistance: DataTypes.STRING,
    retreat: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pokemon',
    tableName: 'pokemons',
    timestamps: false
  });
  return Pokemon;
};