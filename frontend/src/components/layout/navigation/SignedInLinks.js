import React from 'react';
import { Link } from 'react-router-dom';

function SignedInLinks() {
  return (
    <ul>
      <li>
        <Link to='/login'>Login</Link>
      </li>

      <li>
        <Link to='/signup'>Sign up</Link>
      </li>
    </ul>
  );
}

export default SignedInLinks;
