const models = require('../models');

//handle tokens

const saltRounds = 10;

module.exports = {
  create: async token => {
    return await models.token.create({ token });
  },
  isExist: async token => {
    const result = await models.token.findOne({ token });
    if (!result) return false;
    return true;
  },
  deleteAll: async () => {
    return await models.token.deleteMany();
  },
};
