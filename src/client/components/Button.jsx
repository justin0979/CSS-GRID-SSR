import React from 'react';

export default ({ cn, text, renderBtn }) => {
  return (
    <button className={`btn ${cn}`} onClick={renderBtn()}>
      {text}
    </button>
  );
};
