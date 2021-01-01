import React from 'react';

function Popup({ errors }) {
  return (
    <section className='container'>
      <div className='outer'>
        <div className='inner'>
          <h3 style={{ color: 'red' }}>Warning!!!</h3>
          <p>{errors}</p>
        </div>
      </div>
    </section>
  );
}

export default Popup;
