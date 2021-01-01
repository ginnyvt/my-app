import React, { useState } from 'react';
import Popup from '../popup/Popup';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';

import './Auth.css';
import SignedInLinks from '../layout/navigation/SignedInLinks';

function Login() {
  let history = useHistory();

  const [state, setState] = useState({
    username: '',
    password: '',
  });

  const [popup, setPopup] = useState(false);
  const [errors, setErrors] = useState('');

  const handleChange = (e) => {
    setState((prevProps) => ({
      ...prevProps,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:8080/login', state)
      .then((response) => {
        // console.log(response);
        localStorage.setItem('token', response.data.accessToken);
        localStorage.setItem('refresh_token', response.data.refreshToken);
        history.push('/posts');
        window.location.reload();
      })
      .catch((error) => {
        if (error.response.data) {
          setPopup(true);
          setErrors(error.response.data);
          setTimeout(() => {
            window.location.reload();
            setPopup(false);
          }, 10000);
        }
      });
  };

  if (popup) {
    return <Popup errors={errors} />;
  }

  return (
    <section className='container'>
      <h3 className='section__title'>/ Login</h3>
      <div className='outer'>
        <div className='inner'>
          <form onSubmit={handleSubmit}>
            <div className='input-grids'>
              <div className='form-group'>
                {/* <label htmlFor='username' className='form-label'>
                  Username
                </label> */}
                <input
                  type='text'
                  className='form-control'
                  placeholder='Username*'
                  value={state.username}
                  name='username'
                  onChange={handleChange}
                />
              </div>

              <div className='form-group'>
                {/* <label htmlFor='password'>Password</label> */}
                <input
                  type='password'
                  className='form-control'
                  placeholder='Password*'
                  value={state.password}
                  name='password'
                  onChange={handleChange}
                />
              </div>
            </div>

            <button type='submit' className='form-btn btn-outline'>
              Login
            </button>
            <p>
              Don't have an account?
              <Link to='/signup' className='form-signup-link'>
                {' '}
                sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
