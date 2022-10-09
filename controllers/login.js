const jwt = require('jsonwebtoken');

exports.login = (req, res, next) => {
  const token = jwt.sign({ username: req.body.username }, process.env.TOKEN_KEY, { expiresIn: "2h" });

  res.status(201).json({token: token});
};
