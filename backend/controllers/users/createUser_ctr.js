const createUser_uc = require('../../usecases/users/createUser_uc');
const createError = require('http-errors');
const Ajv = require('ajv').default;
const addFormats = require('ajv-formats');
const addErrors = require('ajv-errors');

const invoke = async (req) => {
  const schema = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    type: 'object',
    properties: {
      username: { type: 'string', pattern: '^([a-zA-Z0-9]{3,10})$' },
      password: {
        type: 'string',
        pattern: '(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,12}',
      },
      email: { type: 'string', format: 'email' },
    },
    required: ['username', 'password', 'email'],
    additionalProperties: false,
    errorMessage: {
      properties: {
        username: `username's length MUST contain at least 3 and a maximum of 10 alphanumeric characters`,
        email: 'invalid email',
        password: `password MUST contain at least one letter, at least one number and password's length MUST be longer than six characters and maximum of 12`,
      },
    },
  };

  const ajv = new Ajv({ allErrors: true });
  addFormats(ajv);
  addErrors(ajv);
  const validate = ajv.compile(schema);
  const valid = validate(req.body);
  if (!valid) {
    const [usernameErr, emailErr, passwordErr] = validate.errors;
    if (usernameErr) {
      throw createError(400, usernameErr.message);
    }
    if (emailErr) {
      throw createError(400, emailErr.message);
    }
    if (passwordErr) {
      throw createError(400, passwordErr.message);
    }
  } else {
    return await createUser_uc.handle(req.body);
  }
};

module.exports = { invoke };
