import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './Auth.css';
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
      <section className='container'>
        <h3 className='section__title'>/ Signup</h3>
        <div className='outer'>
          <div className='inner'>
            <form onSubmit={this.handleSubmit}>
              <div className='input-grids'>
                <div className='form-group'>
                  {/* <label htmlFor='username'>Username</label> */}
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Username*'
                    value={this.state.username}
                    name='username'
                    onChange={this.handleChange}
                    required
                  />
                </div>

                <div className='form-group'>
                  {/* <label htmlFor='email'>Email</label> */}
                  <input
                    type='email'
                    className='form-control'
                    placeholder='Email*'
                    value={this.state.email}
                    name='email'
                    onChange={this.handleChange}
                    required
                  />
                </div>

                <div className='form-group'>
                  {/* <label htmlFor='password'>Password</label> */}
                  <input
                    type='password'
                    className='form-control'
                    placeholder='Password*'
                    value={this.state.password}
                    name='password'
                    onChange={this.handleChange}
                    required
                  />
                </div>
              </div>

              <button type='submit' className='form-btn btn-outline'>
                Signup
              </button>
              <p>
                Already register?
                <Link to='/login' className='form-signup-link'>
                  {' '}
                  login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default SignUp;
