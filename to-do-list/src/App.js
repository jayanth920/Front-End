import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom'
import Page from './components/Page';


function App() {
  
  return (
    <div>
  <Routes>
      <Route path="/" element={ <Page /> } />
  </Routes>
    </div>
  );
}

export default App;
