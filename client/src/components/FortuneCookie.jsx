import React, { useState } from 'react';
import classnames from 'classnames';
import axios from 'axios';
import PropTypes from 'prop-types';
import {
  FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon,
} from 'react-share';

const FortuneCookie = ({
  isOpen, handleClick, message, category,
}) => {
  const [like, setLike] = useState(false);
  const classes = classnames({
    FortuneCookie: true,
    'FortuneCookie--open': isOpen,
  });

  const saveToMyFavorite = () => {
    if (like) return;
    setLike(true);
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
          <div>
            <div className="FortuneCookieMessage">
              <p>{message}</p>
            </div>
            <div className="share-like-buttons">
              <img type="button" src="likeIcon.jpeg" className="likeBtn" onClick={saveToMyFavorite}>
                {/* <span style={{ fontSize: '3rem' }}>
                  <i className="fa fa-heart fa-lg" style={{ color: (like ? 'red' : 'grey') }} />
                </span> */}
              </img>
              <FacebookShareButton
                url="https://www.google.com/"
                hashtag="#fortuneCookies"
                quote={message}
                description={message}
              >
                <FacebookIcon size={32} round />
              </FacebookShareButton>
              <TwitterShareButton
                url="http://localshost:3000"
                hashtag="#fortuneCookies"
                quote={message}
                title={message}
              >
                <TwitterIcon size={32} round />
              </TwitterShareButton>
            </div>
          </div>
        )
      }

    </>
  );
};

FortuneCookie.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default FortuneCookie;
