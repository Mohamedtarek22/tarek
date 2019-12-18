const router = require('express').Router();
const bodyParser = require('body-parser');
const admin = require('./guards/admin.guard');
const productController = require('../controllers/product.controller');

router.get('/', productController.getProduct);

router.get('/:id', productController.getProductById);
router.post(
  '/delete',
  bodyParser.urlencoded({ extended: true }),
  productController.postDelete
);
module.exports = router;
