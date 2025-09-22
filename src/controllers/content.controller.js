const { Page, Project, Blog } = require('../models');
const sanitizeHtml = require('sanitize-html');

exports.getPublicPages = async (req, res) => {
  const pages = await Page.findAll();
  res.json(pages);
};

exports.getPage = async (req, res) => {
  const { key } = req.params;
  const page = await Page.findOne({ where: { key } });
  res.json(page);
};

exports.updatePage = async (req, res) => {
  const { key } = req.params;
  const { title, content, meta } = req.body;
  const cleaned = sanitizeHtml(content || '');
  await Page.upsert({ key, title, content: cleaned, meta });
  const page = await Page.findOne({ where: { key } });
  res.json(page);
};

exports.createProject = async (req, res) => { const obj = req.body; const project = await Project.create(obj); res.json(project); };
exports.listProjects = async (req, res) => { const projects = await Project.findAll(); res.json(projects); };

exports.createBlog = async (req, res) => {
  const { title, slug, excerpt, content, publishedAt } = req.body;
  const cleaned = sanitizeHtml(content);
  const blog = await Blog.create({ title, slug, excerpt, content: cleaned, publishedAt: publishedAt || new Date() });
  res.json(blog);
};
exports.listBlogs = async (req, res) => {
  const blogs = await Blog.findAll({ order: [['publishedAt', 'DESC']] });
  res.json(blogs);
};
exports.getBlog = async (req, res) => {
  const { slug } = req.params;
  const blog = await Blog.findOne({ where: { slug } });
  res.json(blog);
};
