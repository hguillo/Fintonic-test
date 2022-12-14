const jwt = require("jsonwebtoken");

exports.checkToken = (req, res, next) => {
  if(req.headers['authorization']) {
    try {
        let authorization = req.headers['authorization'].split(' ');
        if(authorization[0] !== 'Bearer') {
            return res.status(401).send();
        } else {
            jwt.verify(authorization[1], process.env.TOKEN_KEY);
            next();
        }
    } catch (err) {
        return res.status(403).send();
    }
  } else {
      return res.status(401).send();
  }
};
