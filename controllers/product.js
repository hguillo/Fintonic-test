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

exports.insertProduct = (req, res, next) => {
  const product = new Product({
    name: req.body.name,
    description: req.body.description
  });

  product.save().then(prod => {
    res.status(200).send();
  })
  .catch((err) => {
    console.log(err);
  })
};

exports.deleteProduct = (req, res, next) => {
  if(!req.body.productId) {
    return res.status(400).send({error: "Field 'productId' is required"});
  }

  const prodId = req.body.productId;

  Product.deleteOne({_id: prodId})
    .then(() => {
      res.status(200).send();
    })
    .catch(err => console.log(err));
};