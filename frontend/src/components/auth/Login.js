import React, { useState } from 'react';
import Popup from '../popup/Popup';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';

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
        console.log(response);
        localStorage.setItem('token', response.data.accessToken);
        localStorage.setItem('refresh_token', response.data.refreshToken);
        history.push('/posts');
      })
      .catch((error) => {
        if (error.response.data) {
          setPopup(true);
          setErrors(error.response.data);
          setTimeout(() => {
            history.push('/');
            setPopup(false);
          }, 2000);
        }
      });
  };

  if (popup) {
    return <Popup errors={errors} />;
  }
  return (
    <form onSubmit={handleSubmit}>
      <h3>Login</h3>
      <div className='form-group'>
        <label htmlFor='username'>Username</label>
        <input
          type='text'
          className='form-control'
          placeholder='username'
          value={state.username}
          name='username'
          onChange={handleChange}
        />
      </div>

      <div className='form-group'>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          className='form-control'
          placeholder='password'
          value={state.password}
          name='password'
          onChange={handleChange}
        />
      </div>

      <button type='submit'>Login</button>
      <p>
        Don't have an account
        <Link to='/signup'> sign up?</Link>
      </p>
    </form>
  );
}

export default Login;
