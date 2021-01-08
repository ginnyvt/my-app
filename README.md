# Simple CRUD app with authentication

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and [Nodejs](https://nodejs.org/en/) for the server-side.

### Quick start

```bash
# Install dependencies for server
npm install

# Install dependencies for client
npm run client-install


# Run the Node server only
npm run server

# Run the React client only
npm run client

# Server runs on http://localhost:8080 and client on http://localhost:3000
```

## App Info

---

### Version

1.0.0

### Technologies used

#### _Backend_

- [x] data is stored under json file.
- [x] 'jwt' for generating access and refresh tokens.
- [x] 'http-errors' library for handling server errors.
- [x] 'ajv' library for basic validating and sanitizing input data.

#### _Frontend_

- [x] 'react-router-dom' library for managing frontend's routes.
- [x] 'interceptors/axios' library for communicating with the server.
