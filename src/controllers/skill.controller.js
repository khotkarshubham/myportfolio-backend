const { Skill } = require("../config/db");

exports.createSkill = async (req, res) => {
  try {
    const skill = await Skill.create(req.body);
    res.json(skill);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getSkills = async (req, res) => {
  try {
    const skills = await Skill.findAll({ order: [["createdAt", "DESC"]] });
    res.json(skills);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteSkill = async (req, res) => {
  try {
    const id = req.params.id;
    await Skill.destroy({ where: { id } });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
