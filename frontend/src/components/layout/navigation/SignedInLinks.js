import React from 'react';
import { Link } from 'react-router-dom';

function SignedInLinks() {
  return (
    <ul className='nav__list'>
      <li className='nav__links'>
        <Link className='nav__link' to='/login'>
          Login
        </Link>
      </li>

      <li className='nav__links'>
        <Link className='nav__link' to='/signup'>
          Sign up
        </Link>
      </li>
    </ul>
  );
}

export default SignedInLinks;
