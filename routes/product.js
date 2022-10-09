const express = require('express');

const validator = require('../middlewares/validation');
const auth = require('../middlewares/auth');
const productController = require('../controllers/product');

const router = express.Router();

router.get('/products', productController.getProducts);

router.post('/product', [auth.checkToken, validator.insertProduct], productController.insertProduct);

router.delete('/product', [auth.checkToken, validator.deleteProduct], productController.deleteProduct);

module.exports = router;