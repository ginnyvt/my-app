import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../auth/Auth.css';
import axios from 'axios';
import { response } from 'express';

function NewPost() {
  let history = useHistory();
  const token = localStorage.getItem('token');
  if (!token) {
    history.push('/login');
  }

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8080/posts', { title: title, content: content })
      .then((response) => {
        console.log(response);
        history.push('/');
      })
      .catch((err) => console.log(err.response));
  };
  return (
    <section className='container'>
      <h3 className='section__title'>/ Create Post</h3>
      <div className='outer'>
        <div className='inner'>
          <form onSubmit={handleSubmit}>
            <div className='input-grids'>
              <div className='form-group'>
                <input
                  type='text'
                  placeHolder='Title*'
                  className='form-control'
                  value={title}
                  required
                  onChange={(e) => setTitle(e.target.value)}
                ></input>
              </div>

              <div className='form-group'>
                {/* <label htmlFor='description'>Description</label> */}
                <textarea
                  placeHolder='Contents*'
                  rows='8'
                  cols='41'
                  className='form-control'
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                ></textarea>
              </div>
            </div>

            <div className='btn-group'>
              <button className='form-btn btn-outline'>Save Post</button>
              <button
                onClick={() => {
                  history.push('/');
                }}
                className='form-btn btn-outline'
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default NewPost;
