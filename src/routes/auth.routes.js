const express = require('express');
const router = express.Router();
const auth = require('../controllers/auth.controller');

router.post('/login', auth.login);
router.post('/register-initial', auth.registerInitialAdmin); // use once then remove

module.exports = router;
