# Simple CRUD app with authentication

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and [Nodejs](https://nodejs.org/en/) for the server-side.

### Quick start

```bash
# Run this command inside the backend folder to install dependencies for server
npm install

# Run this command inside the frontend folder to install dependencies for client
npm install


# Run this command inside the backend folder to start the server
npm start

# Run this command inside the frontend folder to start react application
npm start

# Server runs on http://localhost:8080 and client on http://localhost:3000
```

## App Info

[Demo](https://wynny-frontend.herokuapp.com/)

### Author

Quynh Tran

### Technologies used

#### _Backend_

- [x] data is stored under json file.
- [x] 'jwt' for generating access and refresh tokens.
- [x] 'http-errors' library for handling server errors.
- [x] 'ajv' library for basic validating and sanitizing input data.

#### _Frontend_

- [x] 'react-router-dom' library for managing frontend's routes.
- [x] 'interceptors/axios' library for communicating with the server.
