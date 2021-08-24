import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FortuneCookie from './FortuneCookie.jsx';

const App = () => {
  const [category, setCategory] = useState('all');
  const [isOpen, setOpen] = useState(false);
  const [message, setMessege] = useState('');
  const getFortuneCookieMessage = (name) => {
    axios.get('/fortune', { params: { category: name } })
      .then((res) => {
        // console.log(res.data);
        setMessege(res.data);
      })
      .catch((err) => { throw err; });
  };
  const handleClick = () => {
    setOpen((prev) => !prev);
    getFortuneCookieMessage(category);
  };
  const handleCategoryChange = (e) => {
    // console.log(e.target.value);
    setCategory(e.target.value);
  };

  return (
    <div className="App">
      <FortuneCookie isOpen={isOpen} handleClick={() => handleClick()} message={message} />
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
    </div>

  );
};

export default App;
