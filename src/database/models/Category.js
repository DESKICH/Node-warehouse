const { DataTypes, Model } = require('sequelize');
const sequelize = require('../Sequelize');

class Category extends Model {}

Category.init(
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

// relate a category to its parent=
Category.belongsTo(Category, {
    as: 'parent', 
    foreignKey: 'parentId', 
    targetKey: 'id',
  });
  
  // relate parent to child categories
  Category.hasMany(Category, {
    as: 'subcategory',
    foreignKey: 'parentId',
  });

module.exports = Category;
