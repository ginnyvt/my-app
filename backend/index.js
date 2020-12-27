const express = require('express');
const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');

const dotenv = require('dotenv');
dotenv.config();
const { PORT } = process.env;

// local modules imported
const createUserCtr = require('./controllers/users/createUser_ctr');

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
