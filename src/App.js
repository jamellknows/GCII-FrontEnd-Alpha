// src/App.js
import React from 'react';
import router from './Routes';
import './App.css';
import Home from './components/Home';
import Header from './components/Home';




function App() {
  return (
    <div className="App">
      <router />
      <Home/>
    </div>
  );
}

export default App;
