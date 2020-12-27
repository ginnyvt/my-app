const listPosts_uc = require('../../usecases/posts/listPosts_uc');
const jwt = require('jsonwebtoken');
const createError = require('http-errors');

const invoke = async (req) => {
  const authHeaders = req.headers.authorization;
  if (authHeaders) {
    const [type, token] = authHeaders.split(' ');
    if (token && type === 'Bearer') {
      return jwt.verify(
        token,
        process.env.TOKEN_SECRET,
        async (err, decoded) => {
          if (err) {
            throw createError(403, err.message);
          } else {
            // console.log(decoded);
            return await listPosts_uc.handle();
          }
        }
      );
    }
  } else {
    throw createError(401, 'Unauthorized!');
  }
};

module.exports = { invoke };
