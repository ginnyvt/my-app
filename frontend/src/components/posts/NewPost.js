import React from 'react';
import { useHistory } from 'react-router-dom';
import '../auth/Auth.css';

function NewPost() {
  let history = useHistory();
  const token = localStorage.getItem('token');
  if (!token) {
    history.push('/login');
  }
  return (
    <section className='container'>
      <h3 className='section__title'>/ Create Post</h3>
      <div className='outer'>
        <div className='inner'>
          <form>
            <div className='input-grids'>
              <div className='form-group'>
                <input
                  type='text'
                  placeHolder='Title*'
                  className='form-control'
                ></input>
              </div>

              <div className='form-group'>
                {/* <label htmlFor='description'>Description</label> */}
                <textarea
                  placeHolder='Contents*'
                  rows='8'
                  cols='41'
                  className='form-control'
                ></textarea>
              </div>
            </div>
            <button className='form-btn btn-outline'>Save Post</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default NewPost;
