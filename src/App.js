import React from 'react';
import './App.scss';
import logo from './tech-biz-logo.jpg';
import Nav from './components/Nav'
import Footer from './components/Footer'
import ContentStep01 from './components/ContentStep01';
import ContentStep02 from './components/ContentStep02';
import ContentStep03 from './components/ContentStep03';
import ContentStep04 from './components/ContentStep04';
import ContentStep05 from './components/ContentStep05';
import ContentStep06 from './components/ContentStep06';
import ContentStep07 from './components/ContentStep07';
import ContentStep08 from './components/ContentStep08';
import ContentStep09 from './components/ContentStep09';
import ContentStep10 from './components/ContentStep10';
import ContentStep11 from './components/ContentStep11';
import ContentStep12 from './components/ContentStep12';
import ContentStep13 from './components/ContentStep13';
import ContentStep14 from './components/ContentStep14';
import ContentStep15 from './components/ContentStep15';



class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header-all">
          <header className="App-header">
            <img src={logo} alt="Logo" className="header-logo" />
          </header>
        </div>
        <div id="recruit-content" className="App-header-all">
          < Nav/>
          < ContentStep01/>
          < ContentStep02/>
          < ContentStep03/>
          < ContentStep04/>
          < ContentStep05/>
          < ContentStep06/>
          < ContentStep07/>
          < ContentStep08/>
          < ContentStep09/>
          < ContentStep10/>
          < ContentStep11/>
          < ContentStep12/>
          < ContentStep13/>
          < ContentStep14/>
          < ContentStep15/>
        </div>
        <div>
          <Footer/>
        </div>
      </div>
      
      
    );
  }
};

export default App;