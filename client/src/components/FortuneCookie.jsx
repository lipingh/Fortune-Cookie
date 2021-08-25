import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import {
  FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon,
} from 'react-share';

const FortuneCookie = ({
  isOpen, handleClick, message, saveToMyFavorite, like,
}) => {
  const classes = classnames({
    FortuneCookie: true,
    'FortuneCookie--open': isOpen,
  });

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
              <img
                role="button"
                src={like ? 'liked.png' : 'like.png'}
                alt=""
                className="likeBtn"
                onClick={() => saveToMyFavorite()}
                onKeyDown={() => { }}
              />
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
  saveToMyFavorite: PropTypes.func.isRequired,
  like: PropTypes.bool.isRequired,
};

export default FortuneCookie;
