const { DataTypes, Model } = require('sequelize');
const sequelize = require('../Sequelize');
const Category = require('../models/Category');

class Item extends Model {}

Item.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    
  },
  {
    sequelize,
    paranoid: true,
  }
);


Item.belongsTo(Category, {
    as: 'category', 
    foreignKey: 'categoryId', 
    targetKey: 'id',
  });
  

module.exports = Item;
