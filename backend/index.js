const express = require('express');
const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');

const dotenv = require('dotenv');
dotenv.config();
const { PORT } = process.env;

// users
const createUserCtr = require('./controllers/users/createUser_ctr');
const myAccountCtr = require('./controllers/users/myAccount_ctr');

// tokens
const accessTokenCtr = require('./controllers/tokens/accessToken_ctr');
const refreshTokenCtr = require('./controllers/tokens/refreshToken_ctr');

// posts
const listPostsCtr = require('./controllers/posts/listPosts_ctr');
const createPostCtr = require('./controllers/posts/createPost_ctr');

// library using
app.use(bodyParser.json());
app.use(cors());

/* ==================
      END-POINTS
=====================*/

// Create new users
app.post('/users', async (req, res) => {
  try {
    const data = await createUserCtr.invoke(req);
    sendSuccessResponse(res, data);
  } catch (err) {
    sendErrorResponse(res, err);
  }
});

// Login user
app.post('/login', async (req, res) => {
  try {
    const data = await accessTokenCtr.invoke(req);
    sendSuccessResponse(res, data);
  } catch (err) {
    sendErrorResponse(res, err);
  }
});

// Get user's information
app.get('/myaccount', async (req, res) => {
  try {
    const data = await myAccountCtr.invoke(req);
    sendSuccessResponse(res, data);
  } catch (err) {
    sendErrorResponse(res, err);
  }
});

// Get new access token based on refresh token
app.post('/token', async (req, res) => {
  try {
    const data = await refreshTokenCtr.invoke(req);
    sendSuccessResponse(res, data);
  } catch (err) {
    sendErrorResponse(res, err);
  }
});

// List posts
app.get('/posts', async (req, res) => {
  try {
    const data = await listPostsCtr.invoke(req);
    sendSuccessResponse(res, data);
  } catch (err) {
    sendErrorResponse(res, err);
  }
});

// Create new post
app.post('/posts', async (req, res) => {
  try {
    const data = await createPostCtr.invoke(req);
    sendSuccessResponse(res, data);
  } catch (err) {
    sendErrorResponse(res, err);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const sendSuccessResponse = (res, data) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(data));
};

const sendErrorResponse = (res, error) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(error.statusCode);
  res.end(error.message);
};
