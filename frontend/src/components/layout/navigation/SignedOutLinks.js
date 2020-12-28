import React from 'react';
import { Link } from 'react-router-dom';

function SignedOutLinks() {
  const logoutHandler = () => {
    localStorage.clear();
  };
  return (
    <ul>
      <li>
        <Link to='/newpost'>New post</Link>
      </li>

      <li>
        <Link to='/' onClick={logoutHandler}>
          Log out
        </Link>
      </li>
    </ul>
  );
}

export default SignedOutLinks;
