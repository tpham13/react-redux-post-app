import React from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from './components/Posts';
import Postform from './components/Postform';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Postform />
        <hr />
        <Posts />
      </div>
    );
  }
  }
  
export default App;
