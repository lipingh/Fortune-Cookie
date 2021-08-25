import React from 'react';
import PropTypes from 'prop-types';

const MessageList = ({ cookies, handleDeleteMessage }) => (
  <div className="cookie-message-list">
    <div className="message-title">&#129376; My Favorite Fortune Cookie Messages</div>
    <div className="cookie-message-list-container">
      {cookies.map((cookie) => (
        <div key={cookie.message}>
          <span>&#129376;</span>
          <span className="cookie-message">{cookie.message}</span>
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

MessageList.propTypes = {
  cookies: PropTypes.arrayOf(PropTypes.shape({
    message: PropTypes.string,
  })).isRequired,
  handleDeleteMessage: PropTypes.func.isRequired,
};

export default MessageList;
