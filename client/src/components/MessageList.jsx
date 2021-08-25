import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const MessageList = ({ cookies }) => {
  const handleDeleteMessage = (cookie) => {
    // console.log(cookie);
    axios.delete('/favorite', { data: cookie })
      .then(() => true)
      .catch((err) => { throw err; });
  };
  return (
    <div className="cookie-message-list">
      <div className="message-title">&#129376; My Favorite Fortune Cookie Messages</div>
      <div className="cookie-message-list-container">
        {cookies.map((cookie) => (
          <div key={cookie.message}>
            &#129376;
            {cookie.message}
            <span
              role="button"
              tabIndex={0}
              onKeyDown={() => { }}
              className="dislike"
              onClick={() => handleDeleteMessage(cookie)}
            >
              &#128465;
            </span>
          </div>

        ))}
      </div>
    </div>
  );
};

MessageList.propTypes = {
  cookies: PropTypes.arrayOf(PropTypes.shape({
    message: PropTypes.string,
  })).isRequired,
};

export default MessageList;
