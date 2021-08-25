import React, { useState } from 'react';
import classnames from 'classnames';
import axios from 'axios';

const FortuneCookie = ({ isOpen, handleClick, message, category }) => {
  const classes = classnames({
    FortuneCookie: true,
    'FortuneCookie--open': isOpen,
  });

  const saveToMyFavorite = () => {
    // console.log({ category, message });
    axios.post('/favorite', { category, message })
      .then()
      .catch((err) => { throw err; });
  };
  return (
    <>
      <div className={classes}>
        <img
          role="presentation"
          src={isOpen ? 'fortune-cookie-open.png' : 'fortune-cookie-closed.png'}
          alt="Fortune Cookie"
          onClick={handleClick}
          onKeyDown={() => { }}
        />
      </div>
      {
        isOpen && (
          <div className="FortuneCookieMessage">
            <button type="button" onClick={saveToMyFavorite}>&#x2661;</button>
            <p>{message}</p>
          </div>
        )
      }
    </>
  );
};

export default FortuneCookie;
