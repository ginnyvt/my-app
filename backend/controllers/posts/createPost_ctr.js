const createPost_uc = require('../../usecases/posts/createPost_uc');
const getUser_uc = require('../../usecases/users/getUser_uc');
const jwt = require('jsonwebtoken');
const createError = require('http-errors');

const invoke = async (req) => {
  // 1. Validate token
  const authHeader = req.headers.authorization;
  const postInput = req.body;

  if (authHeader) {
    const [type, token] = authHeader.split(' ');

    if (token && type === 'Bearer') {
      const result = jwt.verify(
        token,
        process.env.TOKEN_SECRET,
        async (err, decoded) => {
          if (err) {
            throw createError(403, err.message);
          } else {
            // console.log(decoded);
            const user = await getUser_uc.handle(decoded.userId);
            const validatedPost = { ...postInput, username: user.username };
            return await createPost_uc.handle(validatedPost);
          }
        }
      );
      return result;
    }
  } else {
    throw createError(401, 'Unauthorized!');
  }
};

module.exports = { invoke };
