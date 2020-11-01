import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  fetch(`_api/Web`, {  
    accept: 'application/json;odata=verbose',
  })
  .then(r => r.json())
  .then(console.log)
  .catch(console.log);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Probando proxy-sp
        </p>
        
      </header>
    </div>
  );
}

export default App;
