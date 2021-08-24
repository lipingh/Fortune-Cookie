import React from 'react';
import classnames from 'classnames';
const FortuneCookie = ({ isOpen, handleClick, category }) => {
  console.log('isOpen', isOpen);
  const classes = classnames({
    FortuneCookie: true,
    "FortuneCookie--open": isOpen
  });
  return (
    <>
      <div className={classes}>
        <img
          src={isOpen ? "fortune-cookie-open.png" : "fortune-cookie-closed.png"}
          alt="Fortune Cookie"
          onClick={handleClick}
        />
        {
          isOpen && (
            <div className="FortuneCookieMessage">
              <p>A beautiful, smart, and loving person will be coming into your life</p>
            </div>
          )
        }
        <button className="fc-category" onClick={() => handleClick(category)}>
          {category}
        </button>
      </div>


    </>
  );
};

export default FortuneCookie;