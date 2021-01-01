const getPost_uc = require('../../usecases/posts/getPost_uc');
const jwt = require('jsonwebtoken');
const createError = require('http-errors');

const invoke = (req) => {
  const { postId } = req.params;
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
            return await getPost_uc.handle(postId);
          }
        }
      );
    }
  }
};

module.exports = { invoke };
