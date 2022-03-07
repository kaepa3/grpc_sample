import React from 'react';
import logo from './logo.svg';
import './App.css';
import SampleClass, { Sample } from './Sample';
import { connect, useSelector } from "react-redux"
import store, { StoreTest } from './Store'

function App() {
  const count = useSelector((state: StoreTest) => state.count)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload. now
        </p>
        <SampleClass></SampleClass>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Count:{count}</p>
      </header>
    </div>
  );
}

export default App;

