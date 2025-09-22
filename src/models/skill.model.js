const { DataTypes, Model } = require("sequelize");

class Skill extends Model {
  static initModel(sequelize) {
    Skill.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "skill",
        timestamps: true,
      }
    );
    return Skill;
  }
}

module.exports = Skill;
