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
    if (like) {
      axios.delete('/favorite', { data: { message } })
        .then(() => true)
        .catch((err) => { throw err; });
    } else {
      axios.post('/favorite', { category, message })
        .then()
        .catch((err) => { throw err; });
    }

    setLike((prev) => !prev);
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
              <img
                role="button"
                src={like ? 'liked.png' : 'like.png'}
                alt=""
                className="likeBtn"
                onClick={() => { saveToMyFavorite() }}
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
  category: PropTypes.string.isRequired,
};

export default FortuneCookie;
