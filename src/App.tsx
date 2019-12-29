import React from 'react';
import ReactGA from 'react-ga';
import logo from './logo.svg';
import './App.css';

ReactGA.initialize('UA-155143597-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
