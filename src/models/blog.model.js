const { DataTypes, Model } = require('sequelize');

class Blog extends Model {
  static initModel(sequelize) {
    Blog.init({
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      title: { type: DataTypes.STRING, allowNull: false },
      slug: { type: DataTypes.STRING, unique: true, allowNull: false },
      excerpt: { type: DataTypes.STRING },
      content: { type: DataTypes.TEXT },
      publishedAt: { type: DataTypes.DATE },
      coverImage: { type: DataTypes.STRING }
    }, { sequelize, modelName: 'blog' });
  }
}
module.exports = Blog;
