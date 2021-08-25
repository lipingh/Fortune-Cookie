import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const MessageList = ({ cookies }) => {
  const handleDeleteMessage = () => {

  };
  return (
    <div className="cookie-message-list">
      <div className="message-title">&#129376; My Favorite Fortune Cookie Messages</div>
      <div className="cookie-message-list-container">
        {cookies.map((cookie, index) => (
          <div key={index}>
            &#129376;
            {cookie.message}
            <span className="dislike" onClick={() => handleDeleteMessage(cookie)}>&#128465;</span>
          </div>

        ))}
      </div>
    </div>
  );
};

// MessageList.propTypes = {
//   cookies: PropTypes.arrayOf({
//     _id: PropTypes.string,
//     category: PropTypes.string,
//     message: PropTypes.string,
//   }).isRequired,
// };

export default MessageList;
