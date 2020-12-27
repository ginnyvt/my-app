const getUser_uc = require('../../usecases/users/getUser_uc');
const jwt = require('jsonwebtoken');
const createError = require('http-errors');

const invoke = async (req) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const [type, token] = authHeader.split(' ');

    if (token && type === 'Bearer') {
      return jwt.verify(
        token,
        process.env.TOKEN_SECRET,
        async (err, decoded) => {
          if (err) {
            throw createError(403, err.message);
          } else {
            return await getUser_uc.handle(decoded.userId);
          }
        }
      );
    }
  } else {
    throw createError(401, 'Unauthorized!');
  }
};

module.exports = { invoke };
