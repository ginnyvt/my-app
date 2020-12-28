import React from 'react';
import { useHistory } from 'react-router-dom';

function NewPost() {
  let history = useHistory();
  const token = localStorage.getItem('token');
  if (!token) {
    history.push('/login');
  }
  return (
    <form>
      <h3>Create new post</h3>
      <div className='form-group new-post'>
        <label htmlFor='title'>Title</label>
        <input type='text' placeholder='Title' />
      </div>

      <div className='form-group new-post'>
        <label htmlFor='description'>Description</label>
        <textarea
          name='description'
          id=''
          cols='30'
          rows='10'
          placeholder='Description'
        ></textarea>
      </div>
      <button>Create</button>
    </form>
  );
}

export default NewPost;
