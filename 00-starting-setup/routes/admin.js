const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const ProductController = require('../controllers/ProductController');

// /admin/add-product => GET
router.get('/add-product', ProductController.getAddProducts);

router.post('/add-product', ProductController.addProduct);

module.exports = router;
