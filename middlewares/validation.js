const Joi = require('joi');

exports.insertProduct = (req, res, next) => {
  const payload = req.body;
  const schema = Joi.object().keys({
    name: Joi.string().required(),
    description: Joi.string()
  });

  const { error } = schema.validate(payload);
  if(error) return res.status(400).send({error: 'Name field is required'});

  next();
}

exports.deleteProduct = (req, res, next) => {
  const payload = req.body;
  const schema = Joi.object().keys({
    productId: Joi.string().required()
  });

  const { error } = schema.validate(payload);
  if(error) return res.status(400).send({error: 'Field "productId" is required'});

  next();
}

exports.login = (req, res, next) => {
  const payload = req.body;
  const schema = Joi.object().keys({
    username: Joi.string().required(),
    password: Joi.string().required()
  });

  const { error } = schema.validate(payload);
  if(error) return res.status(400).send({error: 'Username and password are required'});

  next();
}