import React from 'react';
import { Link } from 'react-router-dom';
import SignedOutLinks from './SignedOutLinks';
import SignedInLinks from './SignedInLinks';
function Nav() {
  const token = localStorage.getItem('token');

  return (
    <nav>
      <Link>My App</Link>
      {token ? <SignedOutLinks /> : <SignedInLinks />}
    </nav>
  );
}

export default Nav;
