import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FortuneCookie from './FortuneCookie.jsx';
import MessageList from './MessageList.jsx';
import Introduction from './Introduction.jsx';
import FortuneCookieCategory from './FortuneCookieCategory.jsx';

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
      <div className="top-container">
        <Introduction />
        <div className="FortuneCookie-container">
          <FortuneCookie
            isOpen={isOpen}
            handleClick={() => handleClick()}
            message={message}
            category={category}
          />
          <FortuneCookieCategory handleCategoryChange={handleCategoryChange} />
        </div>
      </div>
      <MessageList cookies={cookies} />
    </div>

  );
};

export default App;
