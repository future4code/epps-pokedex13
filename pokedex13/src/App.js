import React from 'react';
import './App.css';
import GlobalState from './global/GlobalState';
import Router from './routes/Router';

function App() {
  return (
    <GlobalState>
      <Router />
    </GlobalState>
  
  )
}

export default App
