// backend/src/models/index.js

// Import already initialized models & sequelize from db.js
const { sequelize, User, Page, Project, Blog, Skill } = require("../config/db");

// Re-export them so other parts of the app can import cleanly
module.exports = {
  sequelize,
  User,
  Page,
  Project,
  Blog,
  Skill,
};
