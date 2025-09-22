// backend/src/routes/public.routes.js
const express = require("express");
const router = express.Router();
const content = require("../controllers/content.controller");
const skillController = require("../controllers/skill.controller");

router.get("/pages", content.getPublicPages);
router.get("/page/:key", content.getPage);
router.get("/projects", content.listProjects);
router.get("/blogs", content.listBlogs);
router.get("/blogs/:slug", content.getBlog);

// Skills
router.get("/skills", skillController.getSkills);

module.exports = router;
