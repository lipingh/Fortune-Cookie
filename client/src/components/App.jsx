import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FortuneCookie from './FortuneCookie.jsx';

const App = () => {
  const [category, setCategory] = useState('all');
  const [isOpen, setOpen] = useState(false);
  const [message, setMessege] = useState('');

  const handleClick = () => {
    setOpen((prev) => !prev);
    getFortuneCookieMessage(category);
  }
  const handleCategoryChange = (e) => {
    console.log(e.target.value);
    setCategory(e.target.value);
  }
  const getFortuneCookieMessage = (category) => {
    axios.get('/fortune', { params: { category: category } })
      .then((res) => {
        console.log(res.data);
        setMessege(res.data);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="App">
      <FortuneCookie isOpen={isOpen} handleClick={() => handleClick()} message={message} />
      <div className="FortuneCookieMessageCategory">
        <label>Choose a category:</label>
        <select onChange={handleCategoryChange}>
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
}

export default App;