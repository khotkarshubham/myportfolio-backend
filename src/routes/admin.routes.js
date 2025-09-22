// backend/src/routes/admin.routes.js
const express = require("express");
const router = express.Router();
const content = require("../controllers/content.controller");
const skillController = require("../controllers/skill.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.use(authMiddleware);

// Pages, Projects, Blogs
router.put("/page/:key", content.updatePage);
router.post("/project", content.createProject);
router.post("/blog", content.createBlog);

// Skills
router.post("/skill", skillController.createSkill);
router.delete("/skill/:id", skillController.deleteSkill);

module.exports = router;
