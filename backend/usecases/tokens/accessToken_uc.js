const userRepository = require('../../repositories/userRepository');
const tokenRepository = require('../../repositories/tokenRepository');
const jwt = require('jsonwebtoken');
const createError = require('http-errors');

const generateAccessToken = (userId) => {
  try {
    return jwt.sign({ userId }, process.env.TOKEN_SECRET, {
      expiresIn: '1m',
    });
  } catch (err) {
    throw createError(
      500,
      `Cannot generate access token, the error was ${err.message}`
    );
  }
};

const generateRefreshToken = (userId) => {
  try {
    return jwt.sign({ userId }, process.env.REFRESH_TOKEN_SECRET, {
      expiresIn: '24h',
    });
  } catch (err) {
    throw createError(
      500,
      `Cannot generate refresh token, the error was ${err.message}`
    );
  }
};

const handle = async (validatedUser) => {
  let existUser = await userRepository.findByUsername(validatedUser.username);
  if (existUser && existUser.password === validatedUser.password) {
    const accessToken = generateAccessToken(existUser.userId);
    const refreshToken = generateRefreshToken(existUser.userId);
    await tokenRepository.insert(refreshToken);
    return { accessToken, refreshToken };
  } else {
    throw createError(400, 'Invalid username and password!');
  }
};
module.exports = { handle };
