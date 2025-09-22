const { DataTypes, Model } = require('sequelize');

class Page extends Model {
  static initModel(sequelize) {
    Page.init({
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      key: { type: DataTypes.STRING, allowNull: false, unique: true },
      title: { type: DataTypes.STRING },
      content: { type: DataTypes.TEXT },
      meta: { type: DataTypes.JSON }
    }, { sequelize, modelName: 'page' });
  }
}

module.exports = Page;
