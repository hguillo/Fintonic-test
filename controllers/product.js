const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
  Product.find()
    .then(products => {
      res.json(products);
    })
    .catch(err => {
      console.log(err);
    });
};