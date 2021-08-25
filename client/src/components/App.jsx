import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FortuneCookie from './FortuneCookie.jsx';
import MessageList from './MessageList.jsx';

const App = () => {
  const [category, setCategory] = useState('all');
  const [isOpen, setOpen] = useState(false);
  const [message, setMessege] = useState('');
  const [cookies, setCookies] = useState([]);
  const getFortuneCookieMessage = (name) => {
    axios.get('/fortune', { params: { category: name } })
      .then((res) => {
        setMessege(res.data);
      })
      .catch((err) => { throw err; });
  };

  const handleClick = () => {
    setOpen((prev) => !prev);
    getFortuneCookieMessage(category);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };
  const getAllFavMessages = () => {
    axios.get('/favorite')
      .then((res) => setCookies(res.data))
      .catch((err) => { throw err; });
  };

  useEffect(() => {
    getAllFavMessages();
  }, []);

  return (
    <div className="App">
      <FortuneCookie
        isOpen={isOpen}
        handleClick={() => handleClick()}
        message={message}
        category={category}
      />
      <div className="FortuneCookieMessageCategory">
        <label>Choose a category:</label>
        <select onChange={handleCategoryChange} id="fc-category">
          <option value="all">ALL</option>
          <option value="computers">COMPUTERS</option>
          <option value="definitions">DIFINITIONS</option>
          <option value="miscellaneous">MISCELLANEOUS</option>
          <option value="people">PEOPLE</option>
          <option value="science">SCIENCE</option>
          <option value="wisdom">WISDOM</option>
        </select>
      </div>
      <MessageList cookies={cookies} />
    </div>

  );
};

export default App;
