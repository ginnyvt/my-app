import axios from 'axios';

import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';

function ViewPost() {
  let { postId } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8080/posts/${postId}`)
      .then((response) => {
        // console.log(response);
        setPost(response.data);
      })
      .catch((err) => console.log(err.response));
  }, []);

  return (
    <section>
      <div className='container'>
        <img src={post.url} alt='' />
        <h1 className='post__desc'>{post.title}</h1>
        <div className='author'>
          <span> {post.author}</span>
        </div>
        <ul className='post__meta'>
          <li className='meta__item'>
            <span className='meta__value'>
              {moment(post.createdAt).format('MMMM, Do YYYY - h:mm a')}
            </span>
          </li>
        </ul>
        <div style={{ marginTop: '1rem' }}>{post.description}</div>
      </div>
    </section>
  );
}

export default ViewPost;
