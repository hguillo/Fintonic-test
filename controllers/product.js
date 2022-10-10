const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
  Product.find()
    .then(products => {
      return res.json(products);
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
    return res.status(200).send();
  })
  .catch((err) => {
    console.log(err);
  })
};

exports.deleteProduct = (req, res, next) => {
  const prodId = req.body.productId;

  Product.deleteOne({_id: prodId})
    .then(() => {
      return res.status(200).send();
    })
    .catch((err) => {
      console.log(err)
      return res.status(404).send({error: "Product not found"});
    });
};