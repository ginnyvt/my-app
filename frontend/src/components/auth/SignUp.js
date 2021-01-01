import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './Auth.css';
import Popup from '../popup/Popup';
import PopupSuccess from '../popup/PopupSuccess';
class SignUp extends Component {
  state = {
    user: {
      username: '',
      email: '',
      password: '',
    },

    popup: false,
    popupSuccess: false,
    errors: '',
  };

  handleChange = (e) => {
    const inputUser = {
      ...this.state.user,
      [e.target.name]: e.target.value,
    };
    this.setState({ user: inputUser });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:8080/users', this.state.user)
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          this.setState({ popupSuccess: true });
          setTimeout(() => {
            this.props.history.push('/login');
          }, 5000);
        }
      })
      .catch((error) => {
        if (error.response.data) {
          this.setState({ popup: true });
          this.setState({ errors: error.response.data });

          setTimeout(() => {
            this.props.history.push('/signup');
            this.setState({ popup: false });
          }, 5000);
        }
      });
  };

  render() {
    if (this.state.popup) {
      return <Popup errors={this.state.errors} />;
    }

    if (this.state.popupSuccess) {
      return <PopupSuccess />;
    }
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
                    value={this.state.user.username}
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
                    value={this.state.user.email}
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
                    value={this.state.user.password}
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
