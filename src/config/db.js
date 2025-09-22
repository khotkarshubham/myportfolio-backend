// backend/src/config/db.js
const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  logging: false,
});

// Load models
const User = require("../models/user.model");
const Page = require("../models/page.model");
const Project = require("../models/project.model");
const Blog = require("../models/blog.model");
const Skill = require("../models/skill.model");

// Init models
User.initModel(sequelize);
Page.initModel(sequelize);
Project.initModel(sequelize);
Blog.initModel(sequelize);
Skill.initModel(sequelize);

module.exports = { sequelize, User, Page, Project, Blog, Skill };
