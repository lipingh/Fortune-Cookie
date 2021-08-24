import React, { useState } from 'react';
import FortuneCookie from './FortuneCookie.jsx';
const App = () => {
  const categories = ['all', 'computers', 'definitions', 'miscellaneous', 'people', 'science', 'wisdom'];
  const [isOpen, setOpen] = useState({});

  const handleClick = (category) => {
    const newOpenState = { ...isOpen };
    newOpenState[category] = !newOpenState[category];
    setOpen(newOpenState);
  };


  return (
    <div className="App">
      <FortuneCookie isOpen={isOpen[categories[0]]} handleClick={() => handleClick(categories[0])} category={categories[0]} />
      <FortuneCookie isOpen={isOpen[categories[1]]} handleClick={() => handleClick(categories[1])} category={categories[1]} />
      <FortuneCookie isOpen={isOpen[categories[2]]} handleClick={() => handleClick(categories[2])} category={categories[2]} />
      <FortuneCookie isOpen={isOpen[categories[3]]} handleClick={() => handleClick(categories[3])} category={categories[3]} />
      <FortuneCookie isOpen={isOpen[categories[4]]} handleClick={() => handleClick(categories[4])} category={categories[4]} />
      <FortuneCookie isOpen={isOpen[categories[5]]} handleClick={() => handleClick(categories[5])} category={categories[5]} />
    </div>

  );
}

export default App;