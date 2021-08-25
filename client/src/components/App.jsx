/* eslint-disable import/extensions */
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
  const [like, setLike] = useState(false);

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

  const handleDeleteMessage = (cookie) => {
    axios.delete('/favorite', { data: cookie })
      .then(() => setCookies((prev) => prev.filter((obj) => obj.message !== cookie.message)))
      .catch((err) => { throw err; });
  };

  const saveToMyFavorite = () => {
    if (like) {
      axios.delete('/favorite', { data: { message } })
        .then(() => setCookies((prev) => prev.filter((obj) => obj.message !== message)))
        .catch((err) => { throw err; });
    } else {
      axios.post('/favorite', { category, message })
        .then((res) => {
          setCookies((prev) => [...prev, res.data]);
        })
        .catch((err) => { throw err; });
    }
    setLike((prev) => !prev);
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
            handleClick={handleClick}
            message={message}
            category={category}
            like={like}
            saveToMyFavorite={saveToMyFavorite}
          />
          <FortuneCookieCategory handleCategoryChange={handleCategoryChange} />
        </div>
      </div>
      <MessageList cookies={cookies} handleDeleteMessage={handleDeleteMessage} />
    </div>

  );
};

export default App;
