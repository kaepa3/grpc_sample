import React from 'react';
import logo from './logo.svg';
import './App.css';
import SampleClass, { Sample } from './Sample';
import store from "./store"
import { connect, useSelector } from "react-redux"
import IStore from './store'

function App() {
  const selector = useSelector((state: any) => state)
  const count = selector.count
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload. now
        </p>
        <Sample text="asfd" >
          <button>ok</button>
        </Sample>
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

