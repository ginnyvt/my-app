import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class SignUp extends Component {
  state = {
    username: '',
    email: '',
    password: '',
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8080/users', this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Sign Up</h3>
        <div className='form-group'>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            className='form-control'
            placeholder='username'
            value={this.state.username}
            name='username'
            onChange={this.handleChange}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            className='form-control'
            placeholder='email'
            value={this.state.email}
            name='email'
            onChange={this.handleChange}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            className='form-control'
            placeholder='password'
            value={this.state.password}
            name='password'
            onChange={this.handleChange}
          />
        </div>

        <button type='submit'>Sign up</button>
        <p>
          Already register
          <Link to='/login'> login?</Link>
        </p>
      </form>
    );
  }
}

export default SignUp;
