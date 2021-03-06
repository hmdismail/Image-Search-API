const services = require('../services');
const jwt = require('jsonwebtoken');
const config = require('../config');

module.exports = async (req, res) => {
  const result = await services.users.login(
    req.body.username,
    req.body.password,
  );
  const payload = {
    _id: result._id,
    username: result.username,
  };

  const token = jwt.sign(
    { payload, exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7 },
    'asdf123456',
  );
  res.json(token);
};
