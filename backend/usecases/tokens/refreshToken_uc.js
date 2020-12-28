const tokenRepository = require('../../repositories/tokenRepository');
const jwt = require('jsonwebtoken');
const createError = require('http-errors');

const handle = async (token) => {
  const tokens = await tokenRepository.list();
  const validToken = tokens.includes(token);

  if (validToken) {
    return jwt.verify(
      token,
      process.env.REFRESH_TOKEN_SECRET,
      async (err, decoded) => {
        if (err) {
          console.log(err);
          throw createError(403, err.message);
        } else {
          const { userId } = decoded;
          return {
            accessToken: jwt.sign({ userId }, process.env.TOKEN_SECRET, {
              expiresIn: '1m',
            }),
          };
        }
      }
    );
  } else {
    throw createError(403, 'Invalid token!');
  }
};

module.exports = { handle };
