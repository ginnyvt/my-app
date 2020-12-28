import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Post from './Post';
import axios from 'axios';
import SignedInLinks from '../layout/navigation/SignedInLinks';

function PostsList() {
  let history = useHistory();
  const token = localStorage.getItem('token');
  if (!token) {
    history.push('/login');
  }

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:8080/posts')
      .then((response) => {
        setPosts(response.data);
      })
      .catch((err) => {
        history.push('/login');
      });
  }, []);

  return (
    <div>
      <p>Post list</p>
      {posts.map((post) => {
        return <Post key={post.postId} post={post} />;
      })}
    </div>
  );
}

export default PostsList;
