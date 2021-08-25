import React from 'react';
import PropTypes from 'prop-types';

const MessageList = ({ cookies }) => (
  <div className="cookie-message-list">
    <div className="message-title">My Favorite Fortune Cookie Messages</div>
    <div className="cookie-message-list-container">
      {cookies.map((cookie, index) => (
        <div key={index}>
          &#129376;
          {cookie.message}
        </div>
      ))}
    </div>
  </div>
);
// MessageList.propTypes = {
//   cookies: PropTypes.arrayOf({
//     _id: PropTypes.string,
//     category: PropTypes.string,
//     message: PropTypes.string,
//   }).isRequired,
// };

export default MessageList;
