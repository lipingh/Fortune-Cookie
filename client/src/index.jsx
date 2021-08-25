import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.jsx';

const initialState = {
  cookies: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case '':
      return
    default:
      return state;
  }
};


export const favoriteMessages = React.createContext();

ReactDOM.render(<App />, document.getElementById('app'));
