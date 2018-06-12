import React, { Component } from 'react';
import Tickers from '../src/Components/Tickers';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 >Crypto currency</h1>
        </header>
        <Tickers />
      </div>
    );
  }
}

export default App;
