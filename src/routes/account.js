const express = require('express');
const router = express.Router();

const AccountController = require('../app/controllers/AccountController');

router.get('/login', AccountController.login);
router.get('/signin', AccountController.signin);

module.exports = router;