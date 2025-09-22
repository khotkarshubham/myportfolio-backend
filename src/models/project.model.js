const { DataTypes, Model } = require('sequelize');

class Project extends Model {
  static initModel(sequelize) {
    Project.init({
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      title: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.TEXT },
      link: { type: DataTypes.STRING },
      tags: { type: DataTypes.ARRAY(DataTypes.STRING) },
      image: { type: DataTypes.STRING }
    }, { sequelize, modelName: 'project' });
  }
}
module.exports = Project;
