import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const dane='Tomasz Kołtyś';
  const grupa="TI6.2";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Imie i nazwisko:{dane}<br></br>Grupa:{grupa}
        </p>
      </header>
    </div>
  );
}

export default App;
