const express = require('express');

const validator = require('../middlewares/validation');
const loginController = require('../controllers/login');

const router = express.Router();

router.post('/login', validator.login, loginController.login);

module.exports = router;