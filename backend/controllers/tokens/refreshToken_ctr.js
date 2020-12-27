const refreshToken_uc = require('../../usecases/tokens/refreshToken_uc');
const createError = require('http-errors');

const invoke = async (req) => {
  const { token } = req.body;
  if (!token) {
    throw createError(403, 'Authentication is required!');
  } else {
    return await refreshToken_uc.handle(token);
  }
};

module.exports = { invoke };
