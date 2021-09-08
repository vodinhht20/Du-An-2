const express = require('express');
const router = express.Router();

const HomeController = require('../app/controllers/SearchController');

router.get('/', HomeController.search);

module.exports = router;