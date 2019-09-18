const path = require('path');

const express = require('express');

const ProductController = require('../controllers/ProductController');

const router = express.Router();

router.get('/', ProductController.getProductList);

module.exports = router;
