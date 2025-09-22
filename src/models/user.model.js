const { DataTypes, Model } = require('sequelize');
const bcrypt = require('bcrypt');

class User extends Model {
  static initModel(sequelize) {
    User.init({
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      email: { type: DataTypes.STRING, unique: true, allowNull: false },
      passwordHash: { type: DataTypes.STRING, allowNull: false }
    }, { sequelize, modelName: 'user' });
  }

  validPassword(password) {
    return bcrypt.compare(password, this.passwordHash);
  }
}

module.exports = User;
