import React from 'react';

const MessageList = ({ cookies }) => (
  <div className="cookie-message-list">
    <div>My Favorite Cookie Messages</div>
    <div className="cookie-message-list-container">
      {cookies.map((cookie) => <div key={cookie._id}>{cookie.message}</div>)}
    </div>
  </div>
);

export default MessageList;
