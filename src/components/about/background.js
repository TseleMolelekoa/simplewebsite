// Background.js
import React from 'react';

const Background = () => {
  return (
    <div
      style={{
        position: 'absolute',
        width: '1207.43px',
        height: '975px',
        left: '800px',
        top: '-45px',
        background: 'linear-gradient(180deg, rgba(189, 212, 223, 0.1) 0%, rgba(145, 184, 201, 0.1) 100%), #144358',
        border: '1px solid #000000',
        borderTopLeftRadius: '1200px', // Corrected here
      }}
    />
  );
}
export default Background;
