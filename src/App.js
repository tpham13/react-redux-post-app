import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';

import Posts from './components/Posts';
import Postform from './components/Postform';
import store from './store.js';


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <Postform />
        <hr />
        <Posts />
      </div>
      </Provider>
    );
  }
  }
  
export default App;
