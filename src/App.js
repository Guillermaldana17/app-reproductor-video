import React from 'react';

import { Provider } from 'react-redux';
import store from './Services/store';
import Home from './Containers/Home'
const App = () => {
  
  return (
    <Provider store={store}>
      <Home></Home>
    </Provider>
  );
}

export default App;
