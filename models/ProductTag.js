const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define id columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    // define product_id
    product_id: {
      type: DataTypes.INTEGER,
      //References the product model's id
      references: {
        model: "product",
        key: "id"
      }
    },
    // define tag_id columns
    tag_id: {
      type:DataTypes.INTEGER,
      //References the product model's id
      references: {
        model: "tag",
        key: "id"
      }
   
    }
  },
  
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
