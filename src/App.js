import React, { Component } from 'react';
import './App.css';
import Search from './components/Contact';
import Image from './components/Image';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Image/>
          <Search/>
        </header>
      </div>
    );
  }
}

export default App;