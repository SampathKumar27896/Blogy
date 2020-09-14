const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')
var authController = require('../controller/AuthController');
router.post('/register', authController.index);
router.post('/login', authController.login);
router.post('/logout', auth, authController.logout);

module.exports = router;