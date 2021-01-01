import React from 'react';

function PopupSuccess() {
  return (
    <section>
      <div className='outer'>
        <div className='inner'>
          <h3 style={{ color: '#0085ad' }}>Congratulations...</h3>
          <p>
            Your account is registered successfully. Please check your email to
            confirm! You will be soon redirected to login page.
          </p>
        </div>
      </div>
    </section>
  );
}

export default PopupSuccess;
