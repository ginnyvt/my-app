import React from 'react';
import { Link } from 'react-router-dom';
import SignedOutLinks from './SignedOutLinks';
import SignedInLinks from './SignedInLinks';

function Nav() {
  const token = localStorage.getItem('token');
  return (
    <nav className='nav'>
      <div className='container nav__container'>
        <Link to='/' className='logo'>
          AmzBlog
        </Link>
        {token ? <SignedOutLinks /> : <SignedInLinks />}
      </div>
    </nav>
  );
}

export default Nav;
