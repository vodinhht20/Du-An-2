const express = require('express');
const router = express.Router();

const HomeController = require('../app/controllers/AdminMyproductController');

router.get('/product/create', HomeController.create);

module.exports = router;