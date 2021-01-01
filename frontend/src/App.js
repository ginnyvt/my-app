import React, { useEffect, useState } from 'react';
import SignUp from './components/auth/SignUp';
import Login from './components/auth/Login';
import PostsList from './components/posts/PostsList';
import NewPost from './components/posts/NewPost';
import Nav from './components/layout/navigation/Nav';
import ViewPost from './components/posts/ViewPost';

import axios from 'axios';
import jwt from 'jsonwebtoken';
import { Route, Switch, useHistory } from 'react-router-dom';

axios.interceptors.request.use(
  (config) => {
    let token = localStorage.getItem('token');
    const refreshToken = localStorage.getItem('refresh_token');
    // console.log('refreshToken: ' + refreshToken);

    if (token && refreshToken) {
      const decodedToken = jwt.decode(token);

      if (decodedToken.exp < Date.now() / 1000) {
        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');

        const stringToken = JSON.stringify({ token: refreshToken });
        const requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: stringToken,
          redirect: 'follow',
        };

        return fetch('http://localhost:8080/token', requestOptions)
          .then((response) => response.json())
          .then((result) => {
            localStorage.setItem('token', result.accessToken);
            const token = result.accessToken;
            config.headers.authorization = `Bearer ${token}`;
            return config;
          })
          .catch((error) => {
            console.log(error);
            return config;
          });
      } else {
        config.headers.authorization = `Bearer ${token}`;
        return config;
      }
    } else {
      return config;
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

function App() {
  let history = useHistory();
  const token = localStorage.getItem('token');
  if (!token) {
    history.push('/login');
  }

  const [fetchedPosts, setFetchedPosts] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:8080/posts')
      .then((response) => {
        setFetchedPosts(response.data);
      })
      .catch((err) => {
        history.push('/login');
      });
  }, []);

  const handlePost = (id) => {
    const foundPost = fetchedPosts.find((p) => {
      return p.postId === id;
    });
    return foundPost;
  };

  return (
    <>
      <Nav />
      <Switch>
        <Route exact path='/'>
          <PostsList fetchedPosts={fetchedPosts} />
        </Route>
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/posts'>
          <PostsList fetchedPosts={fetchedPosts} />
        </Route>
        <Route exact path='/newpost' component={NewPost} />

        <Route exact path='/posts/:postId'>
          <ViewPost handlePost={handlePost} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
