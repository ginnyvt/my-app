import React from 'react';
import { Link } from 'react-router-dom';

function SignedOutLinks() {
  const logoutHandler = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <ul className='nav__list'>
      <li className='nav__links'>
        <Link className='nav__link' to='/'>
          Home
        </Link>
      </li>
      <li className='nav__links'>
        <Link className='nav__link' to='/newpost'>
          New post
        </Link>
      </li>

      <li className='nav__links'>
        <Link className='nav__link' onClick={logoutHandler}>
          Log out
        </Link>
      </li>
    </ul>
  );
}

export default SignedOutLinks;
